const express = require('express');
const Rental = require('../models/rental');
const router = express.Router();
const authentication = require('../lib/authentication');
const customer = require('../models/customer');
const employee = require('../models/employee');
//const unit = require('../models/unit');

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
            query["prenotationdate"] = req.query.prenotationdate;

        const rental = await Rental.find(query);

        if(req.query.maxfinalprice)
            rental = rental.filter(x => x.finalprice <= req.query.maxfinalprice);
        if(req.query.minfinalprice)
            rental = rental.filter(x => x.finalprice >= req.query.minfinalprice);

        res.status(200).json(rental);
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

router.get('/{id}', authentication.verifyAuth(requiredAuthLevel, true), getRentalById, async (req, res) => {
    res.json(res.rental);
})

router.delete('/{id}', authentication.verifyAuth(requiredAuthLevel, false), getRentalById, async (req, res) => {
    try{
        let removedRental = res.rental;
        await res.rental.remove();
        res.status(200).json(removedRental);
    } catch(error){
        res.status(500).json({message: error.message});
    }
})

router.patch('/{id}', authentication.verifyAuth(requiredAuthLevel, false),getRentalById, async (req,res) => {
    try{
        res.rental.set(req.body);
        await res.rental.save();

        res.status(200).json(res.rental);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

/* Non ho le unit 
router.get('/{id}/unit', getRentalById, async (req, res) => {
    try {
        let unit = await Unit.find({rental: req.params.unit});
        res.send(200).json({message: error.message});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})
*/

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
