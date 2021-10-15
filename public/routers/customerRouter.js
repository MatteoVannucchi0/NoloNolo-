const express = require('express');
const router = express.Router();
const Customer = require('../models/customer').model;
const Rental = null//require('../models/rental')
const authentication = require('../lib/authentication');
const errorHandler = require('../lib/errorHandler');


const requiredAuthLevel = authentication.authLevel.employee;

router.get('/', authentication.verifyAuth(requiredAuthLevel, false), async (req, res) => {
    try {
        let query = {}
        if(req.query.username)
            query["loginInfo.username"] = req.query.username;
        if(req.query.email)
            query["loginInfo.email"] = req.query.email;

        const customer = await Customer.find(query);
        res.status(200).json(customer);
    } catch (error) {
        return await errorHandler.handle(error, res, 500);
    }
})

router.post('/', authentication.hashPassword, async (req, res) => {
    let customer = null;
    let jwtToken = null;
    try{
        customer = await Customer(req.body);
        jwtToken = await customer.generateToken();
    } catch (error) {
        return await errorHandler.handle(error, res, 400);
    }

    try {
        const newCustomer = await customer.save();
        res.status(201).set({"Authorization": jwtToken}).json(newCustomer);
    } catch (error) {
        return await errorHandler.handle(error, res);
    }
})

router.get('/:id', authentication.verifyAuth(requiredAuthLevel, true), getCustomerById, async (req, res) => {
    res.json(res.customer);
})

router.delete('/:id', authentication.verifyAuth(requiredAuthLevel, true), getCustomerById, async (req, res) => {
    try{
        let removedCustomer = res.customer;
        await res.customer.remove();
        res.status(200).json(removedCustomer);   //{message: "Customer deleted from the database"});
    } catch(error){
        return await errorHandler.handle(error, res, 500);
    }
})

router.patch('/:id', authentication.verifyAuth(requiredAuthLevel, true), authentication.hashPassword, getCustomerById, async (req,res) => {    
    try{
        res.customer.set(req.body);
        await res.customer.save();

        res.status(200).json(res.customer);
    } catch (error) {
        return await errorHandler.handle(error, res, 400);          //Non so se restituire 400 o 404
    }
})

router.get('/:id/rentals', authentication.verifyAuth(requiredAuthLevel, true) ,getCustomerById, async (req, res) => {
    try{
        let rentals =  await Rental.find({customer: req.params.id})
        res.status(200).json({rentals})
    } catch (error) {
        return await errorHandler.handle(error, res, 400);         //Non so se restituire 400 o 404
    }
})

router.get('/:id/favorites', authentication.verifyAuth(requiredAuthLevel, true) ,async (req, res) => {
    let max = req.query.max;
    return await errorHandler.handleMsg("Non ancora implementanto", res, 404);
})

async function getCustomerById(req, res, next) {
    let customer;
    try {
        customer = await Customer.findById(req.params.id);

        if(customer == null){
            const errmsg = "Customer with id " + req.params.id + " not found on the database";
            return await errorHandler.handleMsg(errmsg, res, 404);
        }
    } catch (error) {
        return await errorHandler.handle(error, res);
    }

    res.customer = customer;
    next();
}

module.exports = router;
