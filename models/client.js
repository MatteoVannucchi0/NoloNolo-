const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    dataOfBirth:{
        type: Date,
        required: true,
        default: Date.now(),
    }
})

module.exports = mongoose.model('Client', clientSchema);