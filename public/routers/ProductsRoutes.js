const express = require("express");
const router = express.Router();
const Products = require("../models/Products");

//Getting all Object
router.get('/', async (req, res) => {
    try {
        const product = await Products.find();
        res.json(product);
    } catch (err){
        res.status(500).json({message: err.message});
    }
});

//Getting one Object 
router.get('/:id', getProduct,(req, res) => {
    res.json(res.product)
});

//Creating one 
router.post('/', async (req, res) => {
    const product = new Products({
        title: req.body.title,
        description: req.body.description,
    });

    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

//Updating one
router.patch('/:id', getProduct, async (req,res) => {
    if(req.body.title != null){
        res.product.title = req.body.title;
    }
    if(req.body.description != null){
        res.product.description = req.body.description;
    }
    try {
        const updateProduct = await res.product.save();
        res.json({updateProduct: updateProduct});
    } catch (err) {
        res.status(400).json({message: err.message});
        
    }
});

//Deleting one
router.delete('/:id', getProduct, async (req,res) => {
    try {
        await res.product.remove();
        res.json({message: 'Delete Object'});
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});

async function getProduct (req, res, next){
    product = null;
    try {
        product = await Products.findById(req.params.id);
        if(product == null){
            return res.status(404).json({message: 'Cannot find the Product'});
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }

    res.product = product;
    next();
};

module.exports = router;
