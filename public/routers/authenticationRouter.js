const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');
const Employee = null; //require('..//models/employee');

router.post('/customers/login', async (req, res) => {
    res.status(200);
});

router.post('/employees/login', async (req, res) => {
    res.status(200);
});


module.exports = router;
