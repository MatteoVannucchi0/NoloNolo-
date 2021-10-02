const express = require('express');
const rental = require('../models/rental');
const router = express.Router();
const unit = require('../models/unit');

router.get('/', async (req, res) => {
    try {
        const rental = await Rental.find();
        res.status(200).json(rental);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.post('/', async (req, res) => {
    try{
        const rental = await Rental({
            customer : req.body.customer,
            employee: req.body.employee,
            bill: req.body.bill,
            startdate: req.body.startdate,
            enddate: req.body.enddate,
            rentdate: req.body.rentdate,
            unit: req.body.unit
        });
    } catch (error) {
        res.status(400).json({message: error.message})
    }

    try {
        const newCustomer = await rental.save();
        res.status(201).json(newCustomer);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
})

router.get('/{id}', getRentalById, async (req, res) => {
    res.json(res.customer);
})

router.delete('/{id}', getRentalById, async (req, res) => {
    try{
        await res.rental.remove();
        res.json({message: "Rental deleted from the database"});
    } catch(error){
        res.status(500).json({message: error.message});
    }
})

router.patch('/{id}', async (req,res) => {
    try{
        let newRental =  await Rental.FindOneAndUpdate(req.params.id, req.body.rental, {new: true});
        if (newRental == null)
            res.send(404).json({message:"Rental not found"})
        res.send(200).json({newRental: newRental});
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.get('/{id}/unit', getRentalById, async (req, res) => {
    try {
        let unit = await Unit.find({rental: req.params.unit});
        res.send(200).json({message: error.message});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})

async function getRentalById(req, res, next) {
    let rental;
    try {
        rental = await Rental.findById(req.params.id);
        if(rental == null){
            return res.status(404).json({message: "Rental not found on the database"});
        }
    } catch (error) {
        return res.status(400).json({message: error.message});
    }

    res.rental = rental;
    next();
}

module.exports = router;
