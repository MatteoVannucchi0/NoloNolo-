const express = require('express');
const router = express.Router();
const Product = require("../models/product").model;
const Unit = require("../models/unit").model;
const authentication = require('../middleware/authentication');

const requiredAuthLevel = authentication.authLevel.employee;

router.get('/', async (req, res) => {
    try {
        const product = await Product.find();
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.post('/', authentication.verifyAuth(requiredAuthLevel, false), async (req, res) => {
    let product = null;
    try{
        product = await Product(req.body);
    } catch (error) {
        res.status(400).json({message: error.message})
    }

    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
})

router.get('/:id', authentication.verifyAuth(requiredAuthLevel, false), getProductById, async (req, res) => {
    res.json(res.product);
})

router.delete('/:id', authentication.verifyAuth(requiredAuthLevel, false), getProductById, async (req, res) => {
    try{
        let removedProduct = res.product;
        await res.product.remove();
        res.json(removedProduct);  
    } catch(error){
        res.status(500).json({message: error.message});
    }
})

router.patch('/:id', authentication.verifyAuth(requiredAuthLevel, false), getProductById, async (req,res) => {    
    try{
        res.product.set(req.body);
        await res.product.save();

        res.status(200).json(res.product);
    } catch (error) {
        res.status(400).json({message: error.message})          //Non so se restituire 400 o 404
    }
})

router.get('/:id/units', authentication.verifyAuth(requiredAuthLevel, false), getProductById, async (req, res) => {
    try{
        let units = await res.product.getUnits();
        res.status(200).json(units)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.post('/:id/units', authentication.verifyAuth(requiredAuthLevel, false), getProductById, async (req, res) => {
    let unit = null;
    try{
        unit = await Unit(req.body);
        unit.set({product: req.params.id});
    } catch (error) {
        res.status(400).json({message: error.message})
    }

    try {
        const newUnit = await unit.save();
        res.status(201).json(newUnit);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
})

router.delete('/:id/units', authentication.verifyAuth(requiredAuthLevel, true), getProductById ,async (req, res) => {
    throw new Error('Not Implemented, da implementare anche su insomnia');
})

router.get('/:id/tags', authentication.verifyAuth(requiredAuthLevel, true), getProductById ,async (req, res) => {
    try{
        res.status(200).json(res.product.tags);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.post('/:id/tags', authentication.verifyAuth(requiredAuthLevel, true), getProductById ,async (req, res) => {
    try{
        res.product.tags.push(req.body);
        res.status(201).json(req.body);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.delete('/:id/tags', authentication.verifyAuth(requiredAuthLevel, true), getProductById ,async (req, res) => {
    throw new Error('Not Implemented, da implementare anche su insomnia');
})

async function getProductById(req, res, next) {
    let product;
    try {
        product = await Product.findById(req.params.id);

        if(product == null){
            return res.status(404).json({message: "Product with id " + req.params.id + " not found on the database"});
        }
    } catch (error) {
        return res.status(400).json({message: error.message});
    }

    res.product = product;
    next();
}

module.exports = router;