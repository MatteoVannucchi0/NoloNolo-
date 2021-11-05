/* eslint-disable no-unused-vars */
const {customers, employees, products} = require("./data");
const fs = require("fs").promises;
const fsSync = require("fs");
const FormData = require('form-data');
const serialize = require("object-to-formdata").serialize;
var path = require("path");


const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
chai.use(require("chai-things"));
chai.use(require('chai-exclude'));

const ingnoreErrorMessage = false;


const masterKey = "fWtuIjIfojFkffmZfQwd4gJaIQqRpqlAK+tbEIQrdLQnBHdnFQUjTSoxcDWxzPzvGlZAVhPJ5gLrl5iDBRSa4A3OGqz4PH92Fodekqotno8bwvbKCCf58xhE3zh8qWeTW0Nj6QZyEq87hHZ7lfdRzBemTqrKQ6BerduytuRrjk6M8xBYfIQJMAE0+uyeGAWItDuhX63/9Erct9817TzJWxZK/lVQK+dVtYKo38v1B56vFET8bJnPPyM5IQNDXCWM7ofM8vpRsybCZ777SSMKYFOjD+yEXqT79Fov1gkv6MlY8d0Ma8xqzNAb+WQ7O1+XULB49xJAi6FlDxjrz/ExUg==";

const axios = require('axios');
axios.defaults.headers.post['Authorization'] = masterKey // for POST requests

const deployToServer = false;
const urlServer = deployToServer ? "https://site202120.tw.cs.unibo.it/api/" : "http://localhost:8000/api";


let customersID = new Map();
let employeesID = new Map();
let productsID = new Map();

function shouldContain(arr, obj) {
    expect(arr).excluding(['_id', '__v' , 'productImage']).to.include.something.that.deep.equals(obj);
}

function shouldNotContain(arr, obj) {
    expect(arr).excluding(['_id', '__v']).to.not.include.something.that.deep.equals(obj);
}

async function postData(data, url, headers = {"Content-type": "application/json"}) {
    try{
        headers["Authorization"] = masterKey;

        const response = await axios({
            url: url,
            method: 'POST',
            headers: headers,
            timeout: 2000,
            data: data,
        });

        const body = response.data;
        const statusCode = response.status; 
        const id = body._id;

  
        statusCode.should.equal(201);

        return {body, statusCode, id};

    } catch(err) {
        if(!ingnoreErrorMessage){        
            console.log("Post error " + err);
            console.log("Error message: ", err.response.data);
        }
    }
}

async function postCustomers(){
    const urlCustomerPost = urlServer + "/customers/";

    console.log("Posting customers at : " + urlCustomerPost);
    for(const customer of customers){
        try{
        const {id, body, statusCode} = await postData(customer, urlCustomerPost);
        customersID.set(customer, id);
        }catch(err){
            continue;
        }
    }
    console.log("Finished posting customers");
}

async function postEmployees(){
    const urlEmployeePost = urlServer + "/employees/";

    console.log("Posting employees at : " + urlEmployeePost);
    for(const employee of employees){
        try{
        const {id, body, statusCode} = await postData(employee, urlEmployeePost);
        employeesID.set(employee, id);
        }catch(err){
            continue;
        }
    }
    console.log("Finished posting employees");
}

async function postProducts(){
    const urlProductsPost = urlServer + "/products/";
    let altProducts = new Map();

    console.log("Posting products at : " + urlProductsPost);
    for(let product of products){
        try{
            //Handle the alt products
            altProducts.set(product, product.altproducts);
            product.altproducts = [];

            //Handle the image of the product
            const urlImage = product.image;
            product.image = undefined;

            //NOTA: se da errore ("FormData not found andare ad aggiungere nel module in nodemodule di object-to-form-data una riga: const FormData = require('form-data'))
            let form = serialize(product);
            form.append('image', fsSync.readFileSync(urlImage), path.basename(urlImage));

            const {_id} = (await axios.post(urlProductsPost, form, { headers: form.getHeaders() })).data//await postData(product, urlProductsPost, form.getHeaders());
            const id = _id;
            productsID.set(product, id);
        }catch(err){
            continue;
        }
    }

    console.log("\tPosting altproducts...");
    for (const [prod, alts] of altProducts) {
        for(const alt of alts){
            const data = {"_id": productsID.get(alt)};
            const {id, body, statusCode} = await postData(data,`${urlProductsPost}${productsID.get(prod)}/altproducts/`);
        }
    }
    console.log("\tFinished posting altproducts");
    console.log("Finished posting products");

}

(async () => {
    //await postCustomers();
    //await postEmployees();
    await postProducts();

})();