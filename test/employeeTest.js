const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

const request = require('supertest');
const app = require('../index');
const url = "/api/employees/"

describe('Unit test employee', function() {

    const adminToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiYWRtaW4iLCJ1c2VybmFtZSI6ImNpYW8iLCJpZCI6ImFzZG9pMDE5MjNlYXNkIiwiaWF0IjoxNjMzNzAwOTY0LCJleHAiOjE2MzYzNzkzNjR9._cIrkGfajb6DbVFiSxD0wU8SUjZ3kI3-ojV8Fu_a0Kw";
    const authheader = {"Authorization": adminToken};

    function verifyEmployee(got, expect){
        got.firstname.should.equal(expect.firstname);
        got.lastname.should.equal(expect.lastname);
        got.loginInfo.username.should.equal(expect.loginInfo.username);
        got.loginInfo.email.should.equal(expect.loginInfo.email);
        got.authorization.should.equal(expect.authorization);
    }

    async function getAuth(){
        return (await request(app).get(url).set(authheader));
    }

    async function postAuth(employee){
        return (await request(app).post(url).set(authheader).send(employee));
    }

    async function getAuthId(id){
        return (await request(app).get(url + id).set(authheader));
    }

    async function patchAuthId(id, employee){
        return  (await request(app).patch(url + id).set(authheader).send(employee));
    }

    async function deleteAuth(id){
        return (await request(app).delete(url + id).set(authheader));
    }

    const employee1 = {
        firstname: 'John',
        lastname: 'Doe',
        loginInfo: {
            username: 'employee1',
            password: 'cavatappi62',
            email: 'employee1@email.com'
        },
        authorization: 'employee'
    }

    const employee2  = {
        firstname: 'Giovanni',
        lastname: 'Facendo',
        loginInfo: {
            username: 'employee3',
            password: 'SbucciaCarote48',
            email: 'employee3@email.com'
        },
        authorization: 'employee'
    }

    const employee3 = {
        firstname: 'Michele',
        lastname: 'Baia',
        loginInfo: {
            username: 'employee3',
            password: 'boomboom70',
            email: 'employee3@email.com'
        },
        authorization: 'employee'
    }

    it('GET /employee should return an array of employee', async function() {
        let req = await getAuth();
        let value = req.body;
        let statusCode = req.statusCode;
        startingEmployee = value;
        
        statusCode.should.equal(200);
        value.should.be.a("array");
    })

    it('POST /employee should create an eployee on the db, then GET /employee/id should return the employee and then DELETE should return it', async function() {
        let req = await postAuth(employee1);
        let value = req.body;
        let statusCode = req.statusCode;
        let id = req.body._id;

        statusCode.should.equal(201);
        verifyEmployee(value, employee1)

        req = await getAuthId(id);
        value = req.body;
        statusCode = req.statusCode;

        verifyEmployee(value, employee1)
        statusCode.should.equal(200);

        req = await deleteAuth(id);
        value = req.body;
        statusCode = req.statusCode;

        verifyEmployee(value, employee1)       
        statusCode.should.equal(200);
    })

    it('DELETE /employee with a random id should return 404', async function() {
        let id = "616050300f33629454139b9a"
        let req = await deleteAuth(id);
        let value = req.body;
        let statusCode = req.statusCode;
        statusCode.should.equal(404);

        value.should.have.property('message');

    })

    it('DELETE /employee should return 400 with invalid id', async function() {
        let id = "!?:.!";
        let req = await deleteAuth(id);
        let value = req.body;
        let statusCode = req.statusCode;
        statusCode.should.equal(400);

        value.should.have.property('message');

    })

    it('GET /employee should return 404 with random id', async function() {
        let id = "616050300f55729454809b9a";
        let req = await getAuthId(id);
        let value = req.body;
        let statusCode = req.statusCode;
        statusCode.should.equal(404);

        value.should.have.property('message');

    })

    it('PATCH /employee should modify a employee on the db created with a POST', async function() {
        let req = await postAuth(employee3);
        let id = req.body._id

        let modifiedEmployee = employee3;
        modifiedEmployee.loginInfo.username = "Michelo";

        req = await patchAuthId(id, modifiedEmployee);
        let value = req.body;
        let statusCode = req.statusCode;
        statusCode.should.equal(200);
        
        verifyEmployee(value, modifiedEmployee);

        await deleteAuth(id);
    })

})