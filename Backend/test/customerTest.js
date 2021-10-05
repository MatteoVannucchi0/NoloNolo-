const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

const request = require('supertest');
const app = require('../index');
const url = "/api"

describe('Unit test customer', function() {
    let startingCustomers = [];

    const customer1 = {
        firstname: 'John',
        lastname: 'Smith',
        username: 'John_Smith',
        password: 'odfaspodfkpqir091349857ashdfi',
        email: 'john@example.com',
        dateOfBirth: Date.now(),
        address: {
            country: 'United States',
            city: 'New York',
            zipcode: '123',
            streetAddress: "5th avenue",
        }
}

    const customer2 = {
        firstname: 'Michele',
        lastname: 'Virelli',
        username: 'Virelli_michele',
        password: 'sldklsdkgod91349857ashdfi',
        email: 'michele@example.com',
        dateOfBirth: Date.now(),
        address: {
            country: 'Italy',
            city: 'Bologna',
            zipcode: '94091',
            streetAddress: "via che non so",
        }
    }

    const customer3 = {
        firstname: 'Matteo',
        lastname: 'Vannucchi',
        username: 'Vannucchi___Matteo',
        password: 'fkgpasofkgèaosfkèg930aps',
        email: 'vannucchi@example.com',
        dateOfBirth: Date.now(),
        address: {
            country: 'Italy',
            city: 'Bologna',
            zipcode: '40122',
            streetAddress: "via marconi 12",
        }
    }

    let id1 = 0;
    let id2 = 0;
    let id3 = 0;

    it('GET /customers should return an array of customers', async function() {
        let req = (await request(app).get(url + '/customers'));
        let value = req.body;
        let statusCode = req.statusCode;
        startingCustomers = value;

        value.should.be.a("array");
        statusCode.should.equal(200);

    })

    it('POST1 /customers should create a customer on the db', async function() {
        let req = (await request(app).post(url + '/customers').send(customer1));
        let value = req.body;
        let statusCode = req.statusCode;

        id1 = req.body._id;

        value.firstname.should.equal(customer1.firstname);
        value.lastname.should.equal(customer1.lastname);
        value.username.should.equal(customer1.username);
        value.password.should.equal(customer1.password);
        value.email.should.equal(customer1.email);
        value.should.have.property('_id');
        value.address.should.have.property('_id');

        statusCode.should.equal(201);
    })

    it('POST2 /customers', async function() {
        let req = (await request(app).post(url + '/customers').send(customer2));
        let value = req.body;
        let statusCode = req.statusCode;

        value.firstname.should.equal(customer2.firstname);
        value.lastname.should.equal(customer2.lastname);
        value.username.should.equal(customer2.username);
        value.password.should.equal(customer2.password);
        value.email.should.equal(customer2.email);
        value.should.have.property('_id');
        value.address.should.have.property('_id');

        id2 = req.body._id;
        statusCode.should.equal(201);
    })

    it('DELETE2 /customers should delete customer post with POST2', async function() {
        let req = (await request(app).delete(url + '/customers/' + id2));
        let value = req.body;
        let statusCode = req.statusCode;

        value.firstname.should.equal(customer2.firstname);
        value.lastname.should.equal(customer2.lastname);
        value.username.should.equal(customer2.username);
        value.password.should.equal(customer2.password);
        value.email.should.equal(customer2.email);
        value.should.have.property('_id');
        value.address.should.have.property('_id');        

        statusCode.should.equal(200);
    })

    it('DELETE2 /customers should return 404 not found', async function() {
        let req = (await request(app).delete(url + '/customers/' + id2));
        let value = req.body;
        let statusCode = req.statusCode;

        value.should.have.property('message');

        statusCode.should.equal(404);
    })

    it('DELETE2 /customers should return 400 invalid id', async function() {
        let req = (await request(app).delete(url + '/customers/' + "!?:_.!"));
        let value = req.body;
        let statusCode = req.statusCode;

        value.should.have.property('message');

        statusCode.should.equal(400);
    })

    it('GET2 /customers should return 404', async function() {
        let req = (await request(app).get(url + '/customers/' + id2));
        let value = req.body;
        let statusCode = req.statusCode;

        value.should.have.property('message');

        statusCode.should.equal(404);
    })

    it('GET1 /customers should return customer of POST1', async function() {
        let req = (await request(app).get(url + '/customers/' + id1));
        let value = req.body;
        let statusCode = req.statusCode;

        value.firstname.should.equal(customer1.firstname);
        value.lastname.should.equal(customer1.lastname);
        value.username.should.equal(customer1.username);
        value.password.should.equal(customer1.password);
        value.email.should.equal(customer1.email);
        value.should.have.property('_id');
        value.address.should.have.property('_id');

        statusCode.should.equal(200);
    })

    it('DELETE1 /customers should delete customer POST1', async function() {
        let req = (await request(app).delete(url + '/customers/' + id1));
        let value = req.body;
        let statusCode = req.statusCode;

        value.firstname.should.equal(customer1.firstname);
        value.lastname.should.equal(customer1.lastname);
        value.username.should.equal(customer1.username);
        value.password.should.equal(customer1.password);
        value.email.should.equal(customer1.email);
        value.should.have.property('_id');
        value.address.should.have.property('_id');        

        statusCode.should.equal(200);
    })

    it('GET /customers should return the same customers as before the test', async function() {
        let req = (await request(app).get(url + '/customers'));
        let value = req.body;
        let statusCode = req.statusCode;

        value.should.deep.equal(startingCustomers);
        statusCode.should.equal(200);
    })
    
    let post1customer = null;
    it('POST1 /customers should create a customer on the db', async function() {
        let req = (await request(app).post(url + '/customers').send(customer1));
        let value = req.body;
        let statusCode = req.statusCode;

        id1 = req.body._id;

        value.firstname.should.equal(customer1.firstname);
        value.lastname.should.equal(customer1.lastname);
        value.username.should.equal(customer1.username);
        value.password.should.equal(customer1.password);
        value.email.should.equal(customer1.email);
        value.should.have.property('_id');
        value.address.should.have.property('_id');

        post1customer = req.body;
        statusCode.should.equal(201);
    })

    it('PATCH1 /customers should not modify if no body is sent', async function() {
        let req = (await request(app).patch(url + '/customers/' + id1).send());
        let value = req.body;
        let statusCode = req.statusCode;

        statusCode.should.equal(200);

        req = (await request(app).get(url + '/customers/' + id1));
        value = req.body;
        statusCode = req.statusCode;
        value.should.deep.equal(post1customer);
    })

    let modifiedCustomer
    it('PATCH1 /customers should modify a customer on the db created with POST1', async function() {
        modifiedCustomer = customer1;
        modifiedCustomer.username = "jjjjhon1";

        let req = (await request(app).patch(url + '/customers/' + id1).send(modifiedCustomer));
        let value = req.body;
        let statusCode = req.statusCode;
        id1 = req.body._id;


        statusCode.should.equal(200);
        
        value.firstname.should.equal(modifiedCustomer.firstname);
        value.lastname.should.equal(modifiedCustomer.lastname);
        value.username.should.equal(modifiedCustomer.username);
        value.password.should.equal(modifiedCustomer.password);
        value.email.should.equal(modifiedCustomer.email);
        value.should.have.property('_id');
        value.address.should.have.property('_id');
    })

    it('DELETE /customers should return 200. It deletes previous post-patch customer', async function() {
        let req = (await request(app).delete(url + '/customers/' + id1));
        let value = req.body;
        let statusCode = req.statusCode;

        value.firstname.should.equal(modifiedCustomer.firstname);
        value.lastname.should.equal(modifiedCustomer.lastname);
        value.username.should.equal(modifiedCustomer.username);
        value.password.should.equal(modifiedCustomer.password);
        value.email.should.equal(modifiedCustomer.email);
        value.should.have.property('_id');
        value.address.should.have.property('_id');
        statusCode.should.equal(200);
    })


    it('DELETE /customers should return 404 no customer with that id', async function() {
        let x = "507f191e810c19729de860ea"
        let req = (await request(app).delete(url + '/customers/' + x));
        let value = req.body;
        let statusCode = req.statusCode;

        value.should.have.property('message');

        statusCode.should.equal(404);
    })

    it('GET on bad uri /customers/wrongurl should return 400 ', async function() {
        let req = (await request(app).get(url + '/customers/wrongurl'));
        let value = req.body;
        let statusCode = req.statusCode;
        statusCode.should.equal(400);
        value.should.have.property("message");
    })

    it('GET on bad uri /customers/wrongurl should return 400 ', async function() {
        //In questo caso get(/customers/wrongurl) viene indirizzato a get /customer/:id, 
        //quindi quando prova a castare wrongurl a objectId restituisce un errore

        let req = (await request(app).get(url + '/customers/wrongurl'));
        let value = req.body;
        let statusCode = req.statusCode;
        statusCode.should.equal(400);
        value.should.have.property("message");
    })

    it('GET /customers/rentals should return an array', async function() {
        let req = (await request(app).post(url + '/customers').send(customer1));
        let value = req.body;
        let statusCode = req.statusCode;

        req = (await request(app).get(url + '/customers/'+ value._id + '/rentals'));
        value = req.body;
        statusCode = req.statusCode;

        statusCode.should.equal(200);
        value.should.be.a("array");

        let elem0 = value[0];
        elem0.should.have.property("startdate");
        elem0.should.have.property("enddate");
        elem0.should.have.property("bill");

        req = (await request(app).post(url + '/customers' + value._id));
        value = req.body;
        statusCode = req.statusCode;
    })

    it('GET /customers/rentals with an non existant id should return 404', async function() {
        let x = "507f191e810c19729de860ea"
        let req = (await request(app).get(url + '/customers/' + x + '/rentals'));
        let value = req.body;
        let statusCode = req.statusCode;

        statusCode.should.equal(404);
        value.should.have.property("message");
    })

    it('GET /customers/rentals with an invalid id should return 400', async function() {
        let req = (await request(app).get(url + '/customers/' + "!?%)" + '/rentals'));
        let value = req.body;
        let statusCode = req.statusCode;

        statusCode.should.equal(400);
        value.should.have.property("message");
    })

    it('GET /customers/favorites should return an array', async function() {
        let req = (await request(app).post(url + '/customers').send(customer1));
        let value = req.body;
        let statusCode = req.statusCode;

        req = (await request(app).get(url + '/customers/'+ value._id + '/favorites'));
        value = req.body;
        statusCode = req.statusCode;

        statusCode.should.equal(200);
        value.should.be.a("array");

        let elem0 = value[0];
        elem0.should.have.property("name");
        elem0.should.have.property("description");
        elem0.should.have.property("image");
        elem0.should.have.property("category");


        req = (await request(app).post(url + '/customers' + value._id));
        value = req.body;
        statusCode = req.statusCode;
    })

    it('GET /customers/favorites with an non existant id should return 404', async function() {
        let x = "507f191e810c19729de860ea"
        let req = (await request(app).get(url + '/customers/' + x + '/favorites'));
        let value = req.body;
        let statusCode = req.statusCode;

        statusCode.should.equal(404);
        value.should.have.property("message");
    })

    it('GET /customers/favorities with an invalid id should return 400', async function() {
        let req = (await request(app).get(url + '/customers/' + "!?%)" + '/favorites'));
        let value = req.body;
        let statusCode = req.statusCode;

        statusCode.should.equal(400);
        value.should.have.property("message");
    })
})