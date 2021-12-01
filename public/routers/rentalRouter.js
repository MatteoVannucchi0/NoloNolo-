const express = require('express');
const Rental = require('../models/rental');
const router = express.Router();
const authentication = require('../lib/authentication');
const Bill = require('../models/bill');
const Unit = require('../models/unit');
const paginate = require('../lib/pagination').paginate;


const requiredAuthLevel = authentication.authLevel.admin

router.get('/', authentication.verifyAuth(requiredAuthLevel, true), async (req, res) => {
    try {
        let query = {};
        if(req.query.customerid) 
            query["customer._id"] = req.query.customerid;
        if(req.query.employeeid)
            query["employee._id"] = req.query.employeeid;
        if(req.query.unitid)
            query["unit_id"] = req.query.unitid;
        if(req.query.prenotationdate)
            query["prenotationdate"] = new Date(req.query.prenotationdate);
        if(req.query.state)
            query["state"] = req.query.state;

        let rentals = await Rental.find(query);

        if(req.query.populate && JSON.parse(req.query.populate)) {
            rentals = await rentals.mapAsync(async(r) => await r.populateAll())
        }

        res.status(200).json(paginate(rentals, req.query));
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.post('/', authentication.verifyAuth(requiredAuthLevel, true), async (req, res) => {
    let rental;
    try{
        rental = await Rental(req.body);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
    try {
        const newRental = await rental.save();
        res.status(201).json(newRental);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
})

router.get('/:id', authentication.verifyAuth(requiredAuthLevel, true), getRentalById, async (req, res) => {
    let rental = res.rental
    if(req.query.populate && JSON.parse(req.query.populate)) {
        // E' richiesto di popolare tutto
        try{
            res.status(200).json(await rental.populateAll());
        } catch (error) {
            res.status(500).json({message: error})
        }

    } else{
        res.status(200).json(rental);
    } 
})

router.delete('/:id', authentication.verifyAuth(requiredAuthLevel, false), getRentalById, async (req, res) => {
    try{
        let removedRental = res.rental;
        await res.rental.remove();
        res.status(200).json(removedRental);
    } catch(error){
        res.status(500).json({message: error.message});
    }
})

router.patch('/:id', authentication.verifyAuth(requiredAuthLevel, false),getRentalById, async (req,res) => {
    try{
        res.rental.set(req.body);
        await res.rental.save();

        res.status(200).json(res.rental);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})


router.get('/:id/bill', authentication.verifyAuth(requiredAuthLevel, false), getRentalById,async function(res, req) {
    try {
        let bill = Bill.find({rental: req.params.bill});
        res.status(200).json(bill);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})

router.get('/:id/unit', async function(res, req) {
    try {
        let unit = Unit.find({rental: req.params.unit});
        res.status(200).json(unit);
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

async function populateRental(rental) {
    await rental.populate(['customer','employee','bill','unit','priceEstimation'])
    if(rental.unit) {
        await rental.populate('unit.product')
    }
    return rental
}

module.exports = router;
