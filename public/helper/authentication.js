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

module.exports.hash = hash;

