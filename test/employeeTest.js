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

    async function getAuthId(id){
        return (await request(app).get(url + id).set(authheader));
    }

    async function patchAuthId(id){
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
        
        console.log(value);
        statusCode.should.equal(200);
        value.should.be.a("array");
    })
    
})