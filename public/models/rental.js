const mongoose = require('mongoose');
const priceEstimationSchema = require("../models/bill").priceEstimationSchema;
//const {billmodel, priceEstimationSchema, billSchema} = require("bill");

const rentalSchema = new mongoose.Schema({
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Customer",
    },
    employee: {
        //The employee that confirm the closed of the rent 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
    },
    prenotationdate:{
        type: Date,
        required: true
    },
    open: {
        type: Boolean,
        required: true, 
    },
    //Until open is true bill is null
    bill: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Bill",
    },
    startdate: {
        type: Date,
        required: true
    },
    expextedenddate: {
        type: Date,
    },
    //The actual end of the rent is null until open is true
    actualendrent: {
        type: Date
    },
    unit: {
        type: Number,
        required: true
    },
    priceEstimation: {
        type: priceEstimationSchema,
        required: true,
    }
})

module.exports = mongoose.model('Rental', rentalSchema);