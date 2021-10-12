const express = require('express');
const router = express.Router();
const Product = require("../models/product").model;
const Unit = require("../models/unit").model;
const authentication = require('../middleware/authentication');
const errorHandler = require('../middleware/errorHandler')

const requiredAuthLevel = authentication.authLevel.employee;

router.get('/', async (req, res) => {
    try {
        let query = {};

        const product = await Product.find(query);
        return res.status(200).json(product);
    } catch (error) {
        return await errorHandler.handle(error, res, 500);
    }
})

router.post('/', authentication.verifyAuth(requiredAuthLevel, false), async (req, res) => {
    let product = null;
    try{
        product = await Product(req.body);
    } catch (error) {
        return await errorHandler.handle(error, res, 400);
    }

    try {
        const newProduct = await product.save();
        return res.status(201).json(newProduct);
    } catch (error) {
        return await errorHandler.handle(error, res);
    }
})

router.get('/:id', getProductById, async (req, res) => {
    res.json(res.product);
})

router.delete('/:id', authentication.verifyAuth(requiredAuthLevel, false), getProductById, async (req, res) => {
    try{
        let removedProduct = res.product;
        await res.product.remove();
        res.status(200).json(removedProduct);  
    } catch(error){
        return await errorHandler.handle(error, res, 500);
    }
})

router.patch('/:id', authentication.verifyAuth(requiredAuthLevel, false), getProductById, async (req,res) => {    
    try{
        res.product.set(req.body);
        await res.product.save();

        res.status(200).json(res.product);
    } catch (error) {
        //TODO controllare il tipo di errore
        return await errorHandler.handle(error, res, 400);
    }
})

router.get('/:id/units', authentication.verifyAuth(requiredAuthLevel, false), getProductById, async (req, res) => {
    try{
        let units = await res.product.getUnits();
        res.status(200).json(units)
    } catch (error) {
        return await errorHandler.handle(error, res, 400);
    }
})

router.post('/:id/units', authentication.verifyAuth(requiredAuthLevel, false), getProductById, async (req, res) => {
    let unit = null;
    try{
        unit = await Unit(req.body);
        unit.set({product: req.params.id});     //L'id del prodotto associato a quella unita è quello del prodotto in cui fa la post
    } catch (error) {
        return await errorHandler.handle(error, res, 400);
    }

    try {
        const newUnit = await unit.save();
        res.status(201).json(newUnit);
    } catch (error) {
        return await handleError(error, res);
    }
})

//TODO da aggiungere nella specifica di openapi
router.delete('/:id/units/:idunit', authentication.verifyAuth(requiredAuthLevel, false), getProductById, getUnitById ,async (req, res) => {
    try{
        let removedUnit = res.unit;
        await res.unit.delete();

        res.status(200).json(removedUnit);
    } catch (error) {
        return await errorHandler.handle(error, res, 500);
    }
})

//TODO aggiungere una query per restiture un determinato tags
router.get('/:id/tags', authentication.verifyAuth(requiredAuthLevel, false), getProductById ,async (req, res) => {
    try{
        let query = {};

        res.status(200).json(res.product.tags);
    } catch (error) {
        return await errorHandler.handle(error, res, 400);
    }
})

router.post('/:id/tags', authentication.verifyAuth(requiredAuthLevel, false), getProductById ,async (req, res) => {
    try{
        if(res.product.tags.includes(req.body)){
            return await errorHandler.handle(error, res, 409);
        }

        res.product.tags.push(req.body);

        await res.product.save();           //TODO forse non funziona
        res.status(201).json(req.body);
    } catch (error) {
        return await errorHandler.handle(error, res, 400);
    }
})

//TODO aggiungere una query per restiture un determinato tags
router.delete('/:id/tags', authentication.verifyAuth(requiredAuthLevel, false), getProductById ,async (req, res) => {
    try {
        let tag = res.product.tags.filter(tag => {return tag.key == req.query.key && tag.value == req.query.value});
        
        const index = res.product.tags.indexOf(tag);
        if(index > -1){
            array.splice(index, 1);
        }

        await res.product.save();
        res.status(200).json(tag);
    } catch (error) {
        return await errorHandler.handle(error, res, 500);
    }
})

//TODO aggiungere una query per restiture un determinato tags
router.get('/:id/altproducts', authentication.verifyAuth(requiredAuthLevel, false), getProductById ,async (req, res) => {
    try{
        let altproducts = await res.product.populate("altproducts")

        res.status(200).json(altproducts);
    } catch (error) {
        return await handleError(error, res);
    }
})

router.post('/:id/altproducts', authentication.verifyAuth(requiredAuthLevel, false), getProductById ,async (req, res) => {
    try{
        if(res.product.altproducts.includes(req.body)){
            return await errorHandler.handle(error, res, 409);
        }

        let altprod = await Product.findById(req.body);
        if(altprod == null){
            return await errorHandler.handle(error, res, 404);
        } 

        res.product.altproducts.push(req.body);
        await res.product.save();           //TODO forse non funziona
        res.status(201).json(req.body);
    } catch (error) {
        return await handleError(error, res);
    }
})



async function getProductById(req, res, next) {
    let product;
    try {
        product = await Product.findById(req.params.id);

        if(product == null){
            return await errorHandler.handle(error, res, 404);
        }
    } catch (error) {
        return await handleError(error, res);
    }

    res.product = product;
    next();
}

async function getUnitById(req, res, next) {
    let unit;
    try {
        unit = await Unit.findById(req.params.idunit);

        if(unit == null){
            return await errorHandler.handle(error, res, 404);
        }
    } catch (error) {
        return await handleError(error, res);
    }

    res.unit = unit;
    next();
}

module.exports = router;