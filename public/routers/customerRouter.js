const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');
const Rental = null//require('../models/rental')
const authentication = require('../routers/authenticationRouter');

router.get('/', async (req, res) => {
    try {
        let query = {}
        if(req.query.username)
            query["loginInfo.username"] = req.query.username;
        if(req.query.email)
            query["loginInfo.email"] = req.query.email;

        const customer = await Customer.find(query);
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.post('/', hashPassword, async (req, res) => {
    let customer = null;
    try{
        customer = await Customer({
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            dateOfBirth: req.body.dateOfBirth,
            loginInfo: req.body.loginInfo,
            address: req.body.address,
        });


    } catch (error) {
        res.status(400).json({message: error.message})
    }

    try {
        const newCustomer = await customer.save();
        res.status(201).json(newCustomer);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
})

router.get('/:id', getCustomerById, async (req, res) => {
    res.json(res.customer);
})

router.delete('/:id', getCustomerById, async (req, res) => {
    try{
        let removedCustomer = res.customer
        await res.customer.remove();
        res.json(removedCustomer);   //{message: "Customer deleted from the database"});
    } catch(error){
        res.status(500).json({message: error.message});
    }
})

router.patch('/:id', hashPassword, getCustomerById, async (req,res) => {    
    try{
        res.customer.set(req.body);
        await res.customer.save();

        res.status(200).json(res.customer);
    } catch (error) {
        res.status(400).json({message: error.message})          //Non so se restituire 400 o 404
    }
})

router.get('/:id/rentals', getCustomerById, async (req, res) => {
    try{
        let rentals =  await Rental.find({customer: req.params.id})
        res.status(200).json({rentals})
    } catch (error) {
        res.status(400).json({message: error.message})          //Non so se restituire 400 o 404
    }
})

router.get('/:id/favorites', async (req, res) => {
    let max = req.query.max;
    res.status(404).json({message: 'Non ancora implementanto'});
})

async function getCustomerById(req, res, next) {
    let customer;
    try {
        customer = await Customer.findById(req.params.id);

        if(customer == null){
            return res.status(404).json({message: "Customer with id " + req.params.id + " not found on the database"});
        }
    } catch (error) {
        return res.status(400).json({message: error.message});
    }

    res.customer = customer;
    next();
}

async function hashPassword(req, res, next) {
    try{
        if(req.body && req.body.loginInfo && req.body.loginInfo.password)
            req.body.loginInfo.password = await authentication.hash(req.body.loginInfo.password);
    } catch (error) {
        return res.status(400).json({message: error.message});
    }

    next();
}

module.exports = router;
