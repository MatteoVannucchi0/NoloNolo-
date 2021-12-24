const express = require('express');
const router = express.Router();
const Unit = require("../models/unit").model;
const authentication = require('../lib/authentication');
const errorHandler = require('../lib/errorHandler');
const priceCalculation = require('../lib/priceCalculation');

const requiredAuthLevel = authentication.authLevel.employee;

router.get('/', authentication.verifyAuth(requiredAuthLevel, false), async (req, res) => {
    try {
        let query = {}
        
        let unit = (await Unit.find(query));

        res.status(200).json(unit);
    } catch (error) {
        return await errorHandler.handle(error, res, 500);
    }
})

router.get('/:idunit', authentication.verifyAuth(requiredAuthLevel, false), getUnitById, async (req, res) => {
    try {
        res.json(res.unit);
    } catch (error) {
        return await errorHandler.handle(error, res, 500);
    }
})

router.get('/:idunit/priceEstimation', authentication.verifyAuth(requiredAuthLevel, false), authentication.getIdFromToken, getUnitById, async (req, res) => {
    try {
        let from = req.query.from || Date.now();
        let to = req.query.to;

        if (!to) {
            const errmsg = "The query parameters 'to' is required";
            return await errorHandler.handleMsg(errmsg, res, 400);
        }

        let agentId = req.agentId;
        let priceEstimation = await priceCalculation.unitPriceEstimation(res.unit, { from, to, agentId, });
        return res.status(200).json(priceEstimation);
    } catch (error) {
        return await errorHandler.handle(error, res, 500);
    }
})

async function getUnitById(req, res, next) {
    let unit;
    try {
        unit = await Unit.findById(req.params.idunit);

        if (unit == null) {
            const errmsg = "Unit with id " + req.params.id + " not found on the database";
            return await errorHandler.handleMsg(errmsg, res, 404);
        }
    } catch (error) {
        return await errorHandler.handle(error, res);
    }

    res.unit = unit;
    next();
}

module.exports = router;
