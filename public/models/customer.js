const mongoose = require('mongoose');

//const loginInfoSchema = require('../models/loginInfo');
//var uniqueValidator = require('mongoose-unique-validator');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

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
    loginInfo: {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: validateEmail,
        },
    },
    address: addressSchema,
})

//customerSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Customer', customerSchema);