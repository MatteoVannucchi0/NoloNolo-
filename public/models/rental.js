const mongoose = require('mongoose');
//const {billmodel, priceEstimationSchema, billSchema} = require("bill");

const rentalSchema = new mongoose.Schema({
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Customer",
    },
    employee: {
        //The employee is null until state is pending
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
    },
    prenotationDate:{
        type: Date,
    },
    state: {
        type: String,
        enum: ['pending','open','close'],
        required: true, 
        default: 'pending'
    },
    //Until the state is open, bill is null
    bill: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bill",
    },
    startDate: {
        type: Date,
    },
    expectedEndDate: {
        type: Date,
    },
    //The actual end of the rent is null until state is open
    actualEndDate: {
        type: Date
    },
    unit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Unit"
    },
    priceEstimation: {
        type: mongoose.Schema.Types.Mixed,
    }
})

module.exports = mongoose.model('Rental', rentalSchema);