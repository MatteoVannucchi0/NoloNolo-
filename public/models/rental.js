const mongoose = require('mongoose');
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
    prenotationDate:{
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
    startDate: {
        type: Date,
        required: true
    },
    expectedEndDate: {
        type: Date,
        required: true
    },
    //The actual end of the rent is null until open is true
    actualEndDate: {
        type: Date
    },
    unit: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Unit"
    },
    priceEstimation: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    }
})

module.exports = mongoose.model('Rental', rentalSchema);