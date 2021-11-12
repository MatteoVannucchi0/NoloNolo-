/* eslint-disable no-unused-vars */
const {customers, employees, products, units, rentals} = require("./data");
const fs = require("fs").promises;
const fsSync = require("fs");
const FormData = require('form-data');
const serialize = require("object-to-formdata").serialize;
const path = require("path");

const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
chai.use(require("chai-things"));
chai.use(require('chai-exclude'));

const ingnoreErrorMessage = false;

const deployToServer = false;
const urlServer = deployToServer ? "https://site202120.tw.cs.unibo.it/api" : "http://localhost:8000/api";

let masterKey = "";
if (!deployToServer){
    const masterKeyPath = "../../.masterkey";
    masterKey = fsSync.readFileSync(masterKeyPath, "utf8");
    console.log(masterKey);
} else {
    masterKey = "armrp6OnNrjqYqe4WG0cta6pkOoGf1x/VekMnTNWP2vbhwfJsC68yYuWOoYSm4ijQm65zbq7Iafgcs5YeA4OBLQzqMjWqWWKkRWam2IHVUWC4M01w+ZsP6mzU0EdGviKEUAX99NoDv4S4DJXvMO6LfUQ0bWl24X/50eq3+OaJvr0ENPagpDmflUq4VwWyWx3Yuuvr37hLXPyZEDKzWNougQ3esR5CTlGuKF5jT3lrJv5R147de2gWql9kok0/Udt1upfLnh4N2GWaS+TjFWQUhXKLCciExfdsZrOSk/S4gEAYizsl1N1S6loZfJlt5IrfW+DE6Ojn0sLp3MMknr8tg=="
}

const axios = require('axios');
axios.defaults.headers.post['Authorization'] = masterKey // for POST requests


let customersID = new Map();
let employeesID = new Map();
let productsID = new Map();
let unitsID = new Map();
let rentalsID = new Map();

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

async function postForm(form, url){
    try{
        const response = await axios.post(url, form, { headers: form.getHeaders() }) 
        
        const body = response.data;
        const statusCode = response.status;
        const id = body._id;

        statusCode.should.equal(201);

        return {body, statusCode, id};

    } catch(err){
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
            //Handle the image of the product
            const urlImage = product.image;
            product.image = undefined;

            //Handle the alt products
            altProducts.set(product, product.altproducts);
            product.altproducts = [];

            //NOTA: se da errore ("FormData not found andare ad aggiungere nel module in nodemodule di object-to-form-data una riga: const FormData = require('form-data'))
            let form = serialize(product);
            form.append('image', fsSync.readFileSync(urlImage), path.basename(urlImage));

            const {id, body, statusCode} = await postForm(form, urlProductsPost); //await postData(product, urlProductsPost, form.getHeaders());
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

async function postUnits(){
    const urlProductsPost = urlServer + "/products/";

    console.log("Posting units");
    for(const unit of units){
        const urlUnitPost = `${urlProductsPost}${productsID.get(unit.product)}/units/`;
        try{
            unit.product = {};

            const {id, body, statusCode} = await postData(unit, urlUnitPost);
            unitsID.set(unit, id);
        }catch(err){
            continue;
        }
    }
    console.log("Finished posting units");
}

async function postRentals(){
    const ulrRentalsPost = urlServer + "/rentals/";
    
    console.log("Posting rentals");
    for(const rental of rentals){
        try{
            const idEmployee = employeesID.get(rental.employee);
            const idCustomer = customersID.get(rental.customer);
            const idUnit = unitsID.get(rental.unit);

            rental.employee = idEmployee;
            rental.customer = idCustomer;
            rental.unit = idUnit;

            const {id, body, statusCode} = await postData(rental, ulrRentalsPost);
            rentalsID.set(rental, id);
        }catch(err){
            continue;
        }
    }
    console.log("Finished posting rentals");
}

(async () => {
    await postCustomers();
    await postEmployees();
    await postProducts();
    await postUnits();
    await postRentals();
})();