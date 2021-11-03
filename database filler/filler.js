/* eslint-disable no-unused-vars */
const {customers, employees} = require("./data");

const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
chai.use(require("chai-things"));
chai.use(require('chai-exclude'));


const masterKey = "fWtuIjIfojFkffmZfQwd4gJaIQqRpqlAK+tbEIQrdLQnBHdnFQUjTSoxcDWxzPzvGlZAVhPJ5gLrl5iDBRSa4A3OGqz4PH92Fodekqotno8bwvbKCCf58xhE3zh8qWeTW0Nj6QZyEq87hHZ7lfdRzBemTqrKQ6BerduytuRrjk6M8xBYfIQJMAE0+uyeGAWItDuhX63/9Erct9817TzJWxZK/lVQK+dVtYKo38v1B56vFET8bJnPPyM5IQNDXCWM7ofM8vpRsybCZ777SSMKYFOjD+yEXqT79Fov1gkv6MlY8d0Ma8xqzNAb+WQ7O1+XULB49xJAi6FlDxjrz/ExUg==";

const axios = require('axios');
axios.defaults.headers.post['Authorization'] = masterKey // for POST requests

const deployToServer = false;
const urlServer = deployToServer ? "https://site202120.tw.cs.unibo.it/api/" : "http://localhost:8000/api";


const customersID = {}
const employeesID = {}

function shouldContain(arr, obj) {
    expect(arr).excluding(['_id', '__v' , 'productImage']).to.include.something.that.deep.equals(obj);
}

function shouldNotContain(arr, obj) {
    expect(arr).excluding(['_id', '__v']).to.not.include.something.that.deep.equals(obj);
}

async function postData(data, url){
    try{
        const response = await axios({
            url: url,
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            timeout: 2000,
            data: data,
        });

        const body = response.data;
        const statusCode = response.status; 
        const id = body._id;

  
        statusCode.should.equal(201);

        return {body, statusCode, id};

    } catch(err) {
        console.log("Post error " + err);
        console.log("Body: ", err.statusText);
    }
}

async function postCustomers(){
    const urlCustomerPost = urlServer + "/customers/";

    console.log("Posting customers at : " + urlCustomerPost);
    for(const customer of customers){
        try{
        const {id, body, statusCode} = await postData(customer, urlCustomerPost);
        customersID[customer] = id;
        }catch(err){
            console.log("Post customer error: " + err);
        }
    }
}

async function postEmployees(){
    const urlEmployeePost = urlServer + "/employees/";

    console.log("Posting employees at : " + urlEmployeePost);
    for(const employee of employees){
        try{
        const {id, body, statusCode} = await postData(employee, urlEmployeePost);
        employeesID[employee] = id;
        }catch(err){
            console.log("Post employee error: " + err);
        }
    }
}

(async () => {
    await postCustomers();
    await postEmployees();

})();