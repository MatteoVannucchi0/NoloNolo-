const mongoose = require('mongoose');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const employeeSchema = new mongoose.Schema({
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
})

module.exports = mongoose.model('Employee', clientSchema);