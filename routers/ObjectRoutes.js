const express = require("express");
const router = express.Router();
const Object = require("../public/models/Object");

//Getting all Object
router.get('/', async (req, res) => {
    try {
        const object = await Object.find();
        res.json(object);
    } catch (err){
        res.status(500).json({message: err.message});
    }
});

//Getting one Object 
router.get('/:id', getObject,(req, res) => {
    res.send(object.title);
    //res.json(res.object)
});

//Creating one 
router.post('/', async (req, res) => {
    const object = new Object({
        title: req.body.title,
        description: req.body.description,
    });

    try {
        const newObject = await object.save();
        res.status(201).json(newObject);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

//Updating one
router.patch('/:id', getObject, async (req,res) => {
    if(req.body.title != null){
        res.object.title = req.body.title;
    }
    if(req.body.description != null){
        res.object.description = req.body.description;
    }
    try {
        const updateObject = await res.object.save();
        res.json({updateObject});
    } catch (err) {
        res.status(400).json({message: err.message});
        
    }
});

//Deleting one
router.delete('/:id', getObject, async (req,res) => {
    try {
        await res.object.remove();
        res.json({message: 'Delete Object'});
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});

async function getObject(req, res, next){
    try {
        object = await Object.findById(req.params.id);
        if(object == null){
            return res.status(404).json({message: 'Cannot find Object'});
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }

    res.object = object;
    next();
};

module.exports = router;
