const express = require('express');
const router = express.Router();
const Customer = require('../models/customer').model;
const Employee = require('../models/employee');
const authentication = require("../lib/authentication");

router.post('/customers/login', async (req, res) => {
    try {

        const email = req.body.email;
        const customer = (await Customer.find({'loginInfo.email': email}))[0];

        if (!customer) {
            return res.status(401).json({ message: "No customer found with that username/email" });
        }

        const correctPassword = await authentication.verifyCredential(req.body, customer.loginInfo)
        if (!correctPassword)
            return res.status(403).json({ message: "Password incorrect" });

        const jwtToken = await customer.generateToken();
        
        return res.status(200).set({ "Authorization": jwtToken }).send();
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

router.post('/employees/login', async (req, res) => {
    try {
        const email = req.body.email;
        const employee = (await Employee.find({'loginInfo.email': email}))[0];

        if (!employee) {
            return res.status(401).json({ message: "No employee found with that username/email" });
        }

        const correctPassword = await authentication.verifyCredential(req.body, employee.loginInfo)
        if (!correctPassword)
            return res.status(403).json({ message: "Password incorrect" });

        const jwtToken = await employee.generateToken();
        
        return res.status(200).set({ "Authorization": jwtToken }).send();
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

router.get('/verify', async (req, res) => {
    try {
        const token = req.headers["authorization"];
        const decrypted = await authentication.verifyToken(token);
        return res.status(200).json(decrypted);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})


//TODO aggiungere verify
router.get('')

module.exports.router = router;

