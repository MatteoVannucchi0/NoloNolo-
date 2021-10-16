const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

chai.use(require("chai-things"));
chai.use(require('chai-exclude'));
const request = require('supertest');
const app = require('../index');

const urlEmployee = "/api/employees/";
const urlCustomer = "/api/customers/";
const urlRental = "/api/rentals/";

const employee = require('../public/models/employee');
const customer = require('../public/models/customer');
const rental = require('../public/models/rental');


describe('Mixed test unit (Rental,Customer,Employee)', function() {
    
    //AuthToken
    const adminToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiYWRtaW4iLCJ1c2VybmFtZSI6ImNpYW8iLCJpZCI6ImFzZG9pMDE5MjNlYXNkIiwiaWF0IjoxNjMzNzAwOTY0LCJleHAiOjE2MzYzNzkzNjR9._cIrkGfajb6DbVFiSxD0wU8SUjZ3kI3-ojV8Fu_a0Kw";
    const authheader = {"Authorization": adminToken};

    //Verify function 
    function verify(got, expected){
        expect(got).excluding(['_id','__v']).to.deep.equal(expected);
    }
    function verifyWithoutPassword(got, expected){
        got.loginInfo.password = expected.loginInfo.password;
        expect(got).excluding(['_id','__v']).to.deep.equal(expected);
    }
    function verifyWithoutPasswordAndBirthDate(got, expected){
        got.loginInfo.password = expected.loginInfo.password;
        got.dateOfBirth = expected.dateOfBirth;
        expect(got).excluding(['_id','__v']).to.deep.equal(expected);
    }

    //Function for CRUD rental 
    async function getAuthRental(){
        return (await request(app).get(urlRental)).set(authheader);
    }

    async function postAuthRental(rental){
        return (await request(app).post(urlRental).set(authheader).send(rental));
    }

    async function getAuthIdRental(id){
        return (await request(app).get(urlRental + id).set(authheader));
    }

    async function patchAuthIdRental(id, rental){
        return (await request(app).patch(urlRental + id).set(authheader).send(rental));
    }

    async function deleteAuthIdRental(id){
        return (await request(app).delete(urlRental + id).set(authheader));
    }

    //Function for CRUD employee
    async function getAuthEmployee(){
        return (await request(app).get(urlEmployee)).set(authheader);
    }

    async function postAuthEmployee(employee){
        return (await request(app).post(urlEmployee).set(authheader).send(employee));
    }

    async function getAuthIdEmployee(id){
        return (await request(app).get(urlEmployee + id).set(authheader));
    }

    async function patchAuthIdEmployee(id, employee){
        return (await request(app).patch(urlEmployee + id).set(authheader).send(employee));
    }

    async function deleteAuthIdEmployee(id){
        return (await request(app).delete(urlEmployee + id).set(authheader));
    }

    //Function for CRUD customer 
    async function getAuthCustomer(){
        return (await request(app).get(urlCustomer)).set(authheader);
    }

    async function postAuthCustomer(customer){
        return (await request(app).post(urlCustomer).set(authheader).send(customer));
    }

    async function getAuthIdCustomer(id){
        return (await request(app).get(urlCustomer + id).set(authheader));
    }

    async function patchAuthIdCustomer(id, customer){
        return (await request(app).patch(urlCustomer + id).set(authheader).send(customer));
    }

    async function deleteAuthIdCustomer(id){
        return (await request(app).delete(urlCustomer + id).set(authheader));
    }

    //Example of Customers 
    let customer1 = {
        firstname: "Michele",
        lastname: "Baia",
        dateOfBirth: Date.now(),
        loginInfo:{
            username: "customer1",
            password: "password",
            email: "customer1@gmail.com"
        }
    }
    let customer2 = {
        firstname: "Roberto",
        lastname: "De Sica",
        dateOfBirth: Date.now(),
        loginInfo:{
            username: "customer2",
            password: "pass",
            email: "customer2@gmail.com"
        }
    }
    let customer3 = {
        firstname: "Cristofero",
        lastname: "Nolano",
        dateOfBirth: Date.now(),
        loginInfo:{
            username: "customer3",
            password: "wordpass",
            email: "customer3@gmail.com"
        }
    }
    let customer4 = {
        firstname: "Margherita",
        lastname: "Roberta",
        dateOfBirth: Date.now(),
        loginInfo:{
            username: "customer4",
            password: "word",
            email: "customer4@gmail.com"
        }
    }

    //Example of Employees
    let employee1 = {
        firstname: "Nicola",
        lastname: "Piccoluomo",
        loginInfo:{
            username: "employee1",
            password: "Authorization",
            email: "employee1@gmail.com"
        },
        authorization: "employee"
    }
    let employee2 = {
        firstname: "Cristina",
        lastname: "Maggiordomo",
        loginInfo:{
            username: "employee2",
            password: "Auth",
            email: "employee2@gmail.com"
        },
        authorization: "employee"
    }
    let employee3 = {
        firstname: "Giorginp",
        lastname: "Del piave",
        loginInfo:{
            username: "employee3",
            password: "Rization",
            email: "employee3@gmail.com"
        },
        authorization: "employee"
    }
    let employee4 = {
        firstname: "Cristoforo",
        lastname: "Colombo",
        loginInfo:{
            username: "employee4",
            password: "IzationAuth",
            email: "employee4@gmail.com"
        },
        authorization: "employee"
    }

    //Rental Structure
    let rentalExample = {
        customer: "",
        employee: "",
        prenotationDate: Date.now(),
        state: "",
        bill: null,
        startDate: Date.now(),
        expectedEndDate: Date.now(),
        actualEndDate: Date.now(),
        unit: "",
        priceEstimation: "",
    }

    //Function for sure operations
    //Employee
    async function getByIdVerifiedEmployee(id, employee) {
        let req = await getAuthIdEmployee(id);
        let value = req.body;
        let statusCode = req.statusCode;
        
        statusCode.should.equal(200);
        verifyWithoutPassword(value, employee);

        return value;
    }

    async function postVerifiedEmployee(employee) {
        let req = await postAuthEmployee(employee);
        let statusCode = req.statusCode;
        let id = req.body._id;

        statusCode.should.equal(201);
        getByIdVerifiedEmployee(id,employee);
        
        return id;
    }

    async function deleteVerifiedEmployee(id, employee) {
        let req = await deleteAuthIdEmployee(id);
        value = req.body;
        statusCode = req.statusCode;

        statusCode.should.equal(200);
        verifyWithoutPassword(value,employee);
    }
    //Customer
    async function getByIdVerifiedCustomer(id, customer) {
        let req = await getAuthIdCustomer(id);
        let value = req.body;
        let statusCode = req.statusCode;
        
        statusCode.should.equal(200);
        verifyWithoutPasswordAndBirthDate(value, customer);

        return value;
    }

    async function postVerifiedCustomer(customer) {
        let req = await postAuthCustomer(customer);
        let statusCode = req.statusCode;
        let id = req.body._id;

        statusCode.should.equal(201);
        getByIdVerifiedCustomer(id,customer);

        return id;
    }

    async function deleteVerifiedCustomer(id, customer) {
        let req = await deleteAuthIdCustomer(id);
        value = req.body;
        statusCode = req.statusCode;

        statusCode.should.equal(200);
        verifyWithoutPasswordAndBirthDate(value,customer);
    }
    //Rental
    async function getByIdVerifiedRental(id, rental) {
        let req = await getAuthIdRental(id);
        let value = req.body;
        let statusCode = req.statusCode;
        
        statusCode.should.equal(200);
        verify(value, rental);

        return value;
    }

    async function postVerifiedRental(rental) {
        let req = await postAuthRental(rental);
        let statusCode = req.statusCode;
        let id = req.body._id;

        statusCode.should.equal(201);
        getByIdVerifiedRental(id,rental);
        
        return id;
    }

    async function deleteVerifiedRental(id, rental) {
        let req = await deleteAuthIdRental(id);
        value = req.body;
        statusCode = req.statusCode;

        statusCode.should.equal(200);
        verify(value,rental);
    }
    

    //TEST

    it('Create and Delete one employee', async function(){
        let id = await postVerifiedEmployee(employee1);

        let value = await getByIdVerifiedEmployee(id, employee1);

        deleteVerifiedEmployee(id,employee1);
    })

    it('Create and Delete one customer', async function(){
        let id = await postVerifiedCustomer(customer1);

        let value = await getByIdVerifiedCustomer(id, customer1);

        deleteVerifiedCustomer(id,customer1);
    })

    it('Create 4 employee and made the username query and the email query ', async function(){
        let id1 = await postVerifiedEmployee(employee1);
        let id2 = await postVerifiedEmployee(employee2);
        let id3 = await postVerifiedEmployee(employee3);
        let id4 = await postVerifiedEmployee(employee4);

        //Query con lo username unico
        let usernameQuery = "employee2";
        let req = (await request(app).get('/api/employees?username=' + usernameQuery).set(authheader));
        let value = req.body;
        let statusCode = req.statusCode;
        
        statusCode.should.equal(200);
        verifyWithoutPassword(value[0], employee2);

        //Query con la email unica
        let emailQuery = "employee4@gmail.com";
        req = (await request(app).get('/api/employees?email=' + emailQuery).set(authheader));
        value = req.body;
        statusCode = req.statusCode;

        statusCode.should.equal(200);
        verifyWithoutPassword(value[0],employee4);

        deleteVerifiedEmployee(id1,employee1);
        deleteVerifiedEmployee(id2,employee2);
        deleteVerifiedEmployee(id3,employee3);
        deleteVerifiedEmployee(id4,employee4);

    })


    it('Create an employee and a Customer to post a minimal version of rental', async function(){
        let idE = await postVerifiedEmployee(employee3);
        let idC = await postVerifiedCustomer(customer3);

        let newRental = {
            customer: idC,
            state: "open",
            bill: null
        }

        let idR = await postVerifiedRental(newRental);

        let value = await getByIdVerifiedRental(idR, newRental);

        let patchRental = {
            customer: idC,
            state: "close",
            bill: null,
        }

        value = await patchAuthIdRental(idR, patchRental);
        console.log(value.body);
    

        deleteVerifiedRental(idR, newRental);
        
        deleteVerifiedCustomer(idC, customer3);
        deleteVerifiedEmployee(idE, employee3);
    })

    //Devo provare a lavorare con la versione effettiva di rent 
    //Sono necessarie le unit !!, e le price estimation ! !
    //Devo gestire il funzionamento delle bill

   //TODO:
   //   Verificare le query su rental
});