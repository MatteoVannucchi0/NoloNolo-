const mongoose = require('mongoose');

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
})

const customerSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: false,
    },
    lastname:{
        type: String,
        required: false,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: 8,
    },
    email: {
        type: String,
        required: true,
        validate: validateEmail,
    },
    dateOfBirth:{
        type: Date,
        required: true,
        default: Date.now(),
    },
    address: addressSchema,
})

module.exports = mongoose.model('Customer', customerSchema);