const mongoose = require('mongoose');
const auth = require('../lib/authentication');
const { validateEmail, validateNotEmail } = require('../lib/validation');
const mongoosePaginate = require('mongoose-paginate-v2');
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");


const employeeSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: false,
    },
    lastname:{
        type: String,
        required: false,
    },
    loginInfo:{
        username:{
            type: String,
            required: true,
            unique: true,
            validate: validateNotEmail,
        },
        password:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
            validate: validateEmail,
        }
    },
    authorization:{
        type: String,   
        required: false,
        enum: [auth.authLevel.admin, auth.authLevel.employee],
        default: auth.authLevel.employee
    },
    profilePicture: {
        type: String,
        default: 'profile/placeholder.png'
    }
})

employeeSchema.plugin(mongoosePaginate);
employeeSchema.plugin(aggregatePaginate);

employeeSchema.methods.generateToken = async function() {
    return await auth.generateToken(this.authorization, this.username, this._id);
}

module.exports = mongoose.model('Employee', employeeSchema);