const chalk = require('chalk');
const fs = require("fs").promises;
var path = require('path');

const errorFileName = ".errorlog.txt";
const errorFilePath = path.join(__dirname, '../../log/' + errorFileName);
const isInTest = typeof global.it === 'function';

function getErrorCode(error){
    switch (error.name) {
        case "CastError":
        case "ValidationError":
            return 400;
        case "MongoServerError":
            return 409
        //TODO dobbiamo gestire il 404
        default:
            return 500;  
    }
}

async function handle(error, res, code = undefined) {
    code = code || getErrorCode(error);
    await logError(error);
    return res.status(code).json({ message: error.message });
}

async function handleMsg(msg, res, code) {
    code = code || getErrorCode(error);
    await logErrorMessage(msg);
    return res.status(code).json({ message: msg });
}

async function logError(error) {
    logErrorMessage(error.name + ": " + error.message);
}

async function logErrorMessage(msg) {
    logToConsole(msg);

    let time = new Date().toISOString().
        replace(/T/, ' ').      
        replace(/\..+/, '')
    let finalString = `[${time}][ERROR] : ${msg} \n`;
    await fs.appendFile(errorFilePath, finalString)
}

function logToConsole(msg){
    if (!isInTest)
        console.error(chalk.red(msg));
}

module.exports.handle = handle;
module.exports.handleMsg = handleMsg;