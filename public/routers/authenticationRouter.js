const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');
const Employee = null; //require('..//models/employee');

const fs = require("fs").promises;
const bcrypt = require('bcrypt');
const authFileName = ".auth"
let privateKey = "";

initializeAuthentication();

async function initializeAuthentication() {
    fs.readFile(global.rootDir + "/" + authFileName)
        .then(data => {
            privateKey = data;
            console.log("private key: " + privateKey);
        }).catch(err => {
            console.error(err);
        })
}

async function hash(string) {
    const saltRound = 5;
    return await bcrypt.hashSync(string, saltRound);
}

router.post('/customers/login', async (req, res) => {
    res.status(200);
});

router.post('/employees/login', async (req, res) => {
    res.status(200);
});


module.exports.router = router;
module.exports.hash = hash;

