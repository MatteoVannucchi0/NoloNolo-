const express = require('express');
const router = express.Router();
const Client = require('../models/client');

router.get("/", async (req, res) => {
    try {
        const client = await Client.find();
        res.json(client);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.get("/:id", getClientById, async (req, res) => {
    res.json(res.client);
})

router.post("/", async (req, res) =>{
    const client = new Client({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
    });

    try {
        const newClient = await client.save();
        res.status(201).json(newClient);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})

router.delete("/:id", getClientById, async (req, res) =>{
    try{
        await res.client.remove();
        res.json({message: "Client deleted from the database"});
    } catch(error){
        res.status(500).json({message: error.message});
    }
})

async function getClientById(req, res, next) {
    let client;
    try {
        client = await Client.findById(req.params.id);
        if(client == null){
            return res.status(404).json({message: "Client not found on the database"});
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

    res.client = client;
    next();
}



module.exports = router;
