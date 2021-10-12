const express = require('express');
const Employee = require('../models/employee');
const Customer = require('../models/customer');
const router = express.Router();
const authentication = require('../middleware/authentication');

const requiredAuthLevel = authentication.authLevel.admin

router.get('/', authentication.verifyAuth(requiredAuthLevel, false), async (req, res) => {
    try {
        let query = {} 
        console.log('Ma ci arrivi ?');
        if(req.query.username)
            query["loginInfo.username"] = req.query.username;
        if(req.query.email)
            query["loginInfo.email"] = req.query.email;
        
        const employee = await Employee.find(query);
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.post('/', authentication.hashPassword, async (req, res) => {
    let employee = null;
    let jwtToken = null;
    try{
        const employee = await Employee({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            loginInfo: req.body.loginInfo,
            authentication: req.body.authentication
        });

        jwtToken = await employee.generateToken();
    } catch (error) {
        res.status(400).json({message: error.message})
    }

    try {
        const newEmployee = await employee.save();
        res.status(201).set({"Authorization": jwtToken}).json(newEmployee);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
})

router.get('/:id', authentication.verifyAuth(requiredAuthLevel, true)  , getEmployeeById, async (req, res) => {
    res.json(res.employee);
})

router.delete('/:id', authentication.verifyAuth(requiredAuthLevel, true), getEmployeeById, async (req, res) => {
    try{
        let removedEmployee = res.employee
        await res.employee.remove();
        res.json({message: "Employee deleted from the database"});
    } catch(error){
        res.status(500).json({message: error.message});
    }
})

router.patch('/:id', authentication.verifyAuth(requiredAuthLevel, true), authentication.hashPassword, getEmployeeById, async (req,res) => {
    try{
        res.employee.set(req.body);
        await res.employee.save();

        res.send(200).json(res.customer);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.get('/:id/rentals',authentication.verifyAuth(requiredAuthLevel, true), getEmployeeById, async (req, res) => {
    try{
        let rentals =  await Rental.find({employee: req.params.id})
        res.send(200).json({rentals})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.get('/:id/customers', authentication.verifyAuth(requiredAuthLevel, true), getEmployeeById, async (req,res) => {
    try {
        let cusotmer = await Cusotmer.find({employee: req.params.id})
        res.status(200).json({cusotmer})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

async function getEmployeeById(req, res, next) {
    let employee;
    try {
        employee = await Employee.findById(req.params.id);
        if(employee == null){
            return res.status(404).json({message: "Employee not found on the database"});
        }
    } catch (error) {
        return res.status(400).json({message: error.message});
    }

    res.employee = employee;
    next();
}

module.exports = router;