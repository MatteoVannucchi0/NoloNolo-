const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

const request = require('supertest');
const app = require('../index');
const url = "/api/rentals/"

describe('Unit test rental' ,function() {

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
        
    })
});