const express = require('express');
const rental = require('../models/rental');
const router = express.Router();
const unit = require('../models/unit');

router.get('/', async (req, res) => {
    try {
        const employee = await Employee.find();
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.post('/', async (req, res) => {
    try{
        const employee = await Employee({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        });
    } catch (error) {
        res.status(400).json({message: error.message})
    }

    try {
        const newEmployee = await employee.save();
        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
})

router.get('/{id}', getEmployeeById, async (req, res) => {
    res.json(res.employee);
})

router.delete('/{id}', getEmployeeById, async (req, res) => {
    try{
        await res.employee.remove();
        res.json({message: "Employee deleted from the database"});
    } catch(error){
        res.status(500).json({message: error.message});
    }
})

router.patch('/{id}', async (req,res) => {
    try{
        let newEmployee =  await Employee.FindOneAndUpdate(req.params.id, req.body.employee, {new: true});
        if (newEmployee == null)
            res.send(404).json({message:"Employee not found"})
        res.send(200).json({newEmployee: newEmployee});
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