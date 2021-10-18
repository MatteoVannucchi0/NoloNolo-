const express = require('express');
const router = express.Router();
const Customer = require('../models/customer').model;
const Employee = null; //require('..//models/employee');
const authentication = require("../lib/authentication");
const validation = require("../lib/validation");

router.post('/customers/login', async (req, res) => {
    try {
        let username = req.body.username;
        let query = {};

        if (validation.validateEmail(username))
            query["loginInfo.email"] = req.body.username;
        else
            query["loginInfo.username"] = req.body.username;

        let customer = (await Customer.find(query))[0];

        if (!customer) {
            return res.status(401).json({ message: "No customer found with that username/email" });
        }

        if (!authentication.verifyCredential(req.body, customer.loginInfo))
            return res.status(403).json({ message: "Password incorrect" });

        const jwtToken = await customer.generateToken();
        
        return res.status(200).set({ "Authorization": jwtToken }).send();
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

router.post('/employees/login', async (req, res) => {
    try {
        let username = req.body.username;
        let employee = null;

        if (validation.validateEmail(username)) {
            employee = await Employee.find({ email: req.body.username })[0];
        } else {
            employee = await Employee.find({ username: req.body.username })[0];
        }

        if (!employee) {
            return res.status(401).json({ message: "No employee found with that username/email" });
        }

        if (!authentication.verifyCredential(req.body, employee.loginInfo))
            return res.status(403).json({ message: "Password incorrect" });

        const jwtToken = await employee.generateToken();
        return res.status(200).set({ "Authorization": jwtToken });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

module.exports.router = router;

