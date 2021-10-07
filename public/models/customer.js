const mongoose = require('mongoose');
const LoginInfoSchema = require('../models/loginInfo');

const addressSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    zipcode: {
        type: String,
        required: true,
    },
    streetAddress: {
        type: String,
        required: true,
    }
}, { _id : false });

const customerSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: false,
    },
    lastname:{
        type: String,
        required: false,
    },
    dateOfBirth:{
        type: Date,
        required: true,
        default: Date.now(),
    },
    loginInfo: LoginInfoSchema,
    address: addressSchema,
})

module.exports = mongoose.model('Customer', customerSchema);