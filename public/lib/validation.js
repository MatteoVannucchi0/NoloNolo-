import {model as Customer} from "../models/customer";
import {model as Employee} from "../models/employee";


const validateEmail = function(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const validateNotEmail = function(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return !re.test(email)
};

const validateCustomerExistence = function(id){
    const customer = Customer.findById(id);
    if(customer)
        return true
    else
        return false;
};

const validateEmployeeExistence = function(id){
    const employee = Employee.findById(id);
    if(employee)
        return true
    else
        return false;
};

module.exports.validateEmail = validateEmail;
module.exports.validateNotEmail = validateNotEmail;