const express = require('express');
const customer = require('../models/customer');
const router = express.Router();
const Customer = require('../models/customer');
const Rental = null//require('../models/rental')

router.get('/', async (req, res) => {
    try {
        const customer = await Customer.find();
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.post('/', async (req, res) => {
    let customer = null;
    try{
        customer = await Customer({
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            username : req.body.username,
            password : req.body.password,
            email : req.body.email,
            dateOfBirth: req.body.dateOfBirth,
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
        //res.status(500).json({message: error.message});
    }
})

router.patch('/:id', async (req,res) => {
    try{
        let newCustomer =  await Customer.FindOneAndUpdate(req.params.id, req.body.customer, {new: true});
        if (newCustomer == null)
            res.send(404).json({message:"Customer not found"})
        res.send(200).json({newCustomer});
    } catch (error) {
        res.status(400).json({message: error.message})          //Non so se restituire 400 o 404
    }
})

router.get('/:id/rentals', getCustomerById, async (req, res) => {
    try{
        let rentals =  await Rental.find({customer: req.params.id})
        res.send(200).json({rentals})
    } catch (error) {
        res.status(400).json({message: error.message})          //Non so se restituire 400 o 404
    }
})

router.get('/:id/favorites', async (req, res) => {
    res.send(404).json({message: 'Non ancora implementanto'});
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

module.exports = router;
