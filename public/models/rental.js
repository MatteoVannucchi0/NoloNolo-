const mongoose = require('mongoose');

const modifierSchema = new mongoose.Schema({
    value: {
        type: integer,
        required: true
    },
    condition: {
        type: String,
        required: true
    }
})

const billSchema = new mongoose.Schema({
    baseprice: {
        type: integer,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    modifier: {
        type: Array
        //Come dire che è un'array di modifier  ??
    },
    date: {
        type: Date,
        required: true
    }
})

const rentalSchema = new mongoose.Schema({
    customer:{
        type: integer,
        required: true
    },
    employee: {
        type: interger,
        required: true
    },
    bill: billSchema,
    startdate: {    
        type: Date,
        required: true
    },
    enddate: {
        type: Date,
        required: true
    },
    rentdate: {
        type: Date,
        required: true
    },
    unit: {
        type: integer,
        required: true
    }

})

module.exports = mongoose.model('Rental', clientSchema);