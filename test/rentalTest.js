const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

const request = require('supertest');
const app = require('../index');
const url = "/api/rentals/"

describe('Unit test rental' ,function() {

    const adminToken = "fWtuIjIfojFkffmZfQwd4gJaIQqRpqlAK+tbEIQrdLQnBHdnFQUjTSoxcDWxzPzvGlZAVhPJ5gLrl5iDBRSa4A3OGqz4PH92Fodekqotno8bwvbKCCf58xhE3zh8qWeTW0Nj6QZyEq87hHZ7lfdRzBemTqrKQ6BerduytuRrjk6M8xBYfIQJMAE0+uyeGAWItDuhX63/9Erct9817TzJWxZK/lVQK+dVtYKo38v1B56vFET8bJnPPyM5IQNDXCWM7ofM8vpRsybCZ777SSMKYFOjD+yEXqT79Fov1gkv6MlY8d0Ma8xqzNAb+WQ7O1+XULB49xJAi6FlDxjrz/ExUg==";
    const authheader = {"Authorization": adminToken};
    
    function verifyRent(got, expect){
        got.customer.should.equal(expect.customer);
        got.employee.should.equal(expect.employee);
        got.prenotationdate.should.equal(expect.prenotationdate);
        got.open.should.equal(expect.open);
        got.unit.should.equal(expect.unit);
    }

    async function getAuth(){
        return (await request(app).get(url).set(authheader));
    }

    async function postAuth(rental){
        return (await request(app).post(url).set(authheader).send(rental));
    }

    async function getAuthId(id){
        return (await request(app).get(url + id).set(authheader));
    }

    async function patchAuthId(id, rental){
        return  (await request(app).patch(url + id).set(authheader).send(rental));
    }

    async function deleteAuth(id){
        return (await request(app).delete(url + id).set(authheader));
    }

    it('GET /rental should return an array of rental', async function() {
        let req = await getAuth();
        let value = req.body;
        let statusCode = req.statusCode;
        startingRental = value;
        
        statusCode.should.equal(200);
        value.should.be.a("array");
    })
/*
    it('POST /rental should create a rental document on the db, then should GET it and DELETE it', async function() {
        const rent1 = {
            customer: "845846189641",
            employee: "389562062348",
            prenotationdate: Date.now(),
            open: false,
            unit: "43794619691",
        };
        let req = await postAuth(rent1);
        let value = req.body;
        let statusCode = req.statusCode;
        let id = req.body._id;

        statusCode.should.equal(201);
        verifyRent(value, rent1)

        req = await getAuthId(id);
        value = req.body;
        statusCode = req.statusCode;

        verifyRent(value, rent1)
        statusCode.should.equal(200);

        req = await deleteAuth(id);
        value = req.body;
        statusCode = req.statusCode;

        verifyRent(value, rent1)       
        statusCode.should.equal(200);
    })*/
});