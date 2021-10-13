const mongoose = require('mongoose');

const modifierSchema = new mongoose.Schema({
    value: {
        type: Number,
        required: true
    },
    condition: {
        type: String,
        required: true
    }
}, {_id: false})

const billSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Customer",
    },
    baseprice: {
        type: Number,
        required: true
    },
    modifier: {
        type: [modifierSchema], 
        required: true
    },
    finalprice: {
        type: Number,
        required: true,
    },
    startrent: {
        type: Date,
    },
    endrent: {
        type: Date,
    },
    unit: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Unit",
    }
})

const priceEstimationSchema = mongoose.Schema({
    basedprice: {
        type: Number,
        required: true
    },
    modifier: {
        type: [modifierSchema],
        required: true,
    },
    finalprice:{
        type: Number,
        required: true
    }
}, {_id: false});

module.exports.billmodel = mongoose.model('Bill', billSchema);
module.exports.billSchema = billSchema;

module.exports.priceEstimationSchema = priceEstimationSchema;