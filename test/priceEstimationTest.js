const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

chai.use(require("chai-things"));
chai.use(require('chai-exclude'));

const request = require('supertest');
const app = require('../index');
const url = "/api/products/"


describe('Unit test product api', function () {

    function verify(got, expected) {
        expect(got).excluding(['_id', '__v']).to.deep.equal(expected);

        /*got.name.should.equal(expected.name);
        got.description.should.equal(expected.description);
        got.image.should.equal(expected.image);
        got.category.should.equal(expected.category);
        got.subcategory.should.equal(expected.subcategory);
        got.tags.should.deep.equal(expected.tags);


        console.log("got: ", got, "expected: ", expected);
        got.altproducts.should.deep.equal(expected.altproducts);*/
    }

    function shouldContain(arr, obj) {
        expect(arr).excluding(['_id', '__v']).to.include.something.that.deep.equals(obj);
    }

    function shouldNotContain(arr, obj) {
        expect(arr).excluding(['_id', '__v']).to.not.include.something.that.deep.equals(obj);
    }

    const adminToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiYWRtaW4iLCJ1c2VybmFtZSI6ImNpYW8iLCJpZCI6ImFzZG9pMDE5MjNlYXNkIiwiaWF0IjoxNjMzNzAwOTY0LCJleHAiOjE2MzYzNzkzNjR9._cIrkGfajb6DbVFiSxD0wU8SUjZ3kI3-ojV8Fu_a0Kw";
    const authheader = { "Authorization": adminToken };

    async function postAuth(prod) {
        return await (request(app).post(url).set(authheader).send(prod));
    }

    async function getAuth() {
        return (await request(app).get(url).set(authheader));
    }

    async function getAuthId(id) {
        return (await request(app).get(url + id).set(authheader));
    }

    async function patchAuth(id, customer) {
        return (await request(app).patch(url + id).set(authheader).send(customer));
    }

    async function deleteAuth(id) {
        return (await request(app).delete(url + id).set(authheader));
    }

    it("should post a product with two unit inside and request a priceEstimation", async function () {
        const tags = [{ key: "Marca", value: "bmw" },{ key: "Colore", value: "Oro" }];

        const prod = {
            name: "prodottoPriceEstTest1",
            description: "Descrizione test",
            image: "/urldiprova/image1.png",
            category: "Auto",
            subcategory: "Lusso",
            tags: tags,
            altproducts: [],
        }


        let req = await postAuth(prod);
        let value = req.body;
        let statusCode = req.statusCode;
        let id = value._id;

        statusCode.should.equal(201);
        verify(value, prod);

        const unit1 = {
            name: "UnitTestPriceEst1-1",
            condition: "perfect",
            product: id,
            price: 100,
            rentals: [],
        }

        const unit2 = {
            name: "UnitTestPriceEst1-1",
            condition: "minor flaw",
            product: id,
            price: 100,
            rentals: [],
        }

        req = (await request(app).post(url + id + "/units").set(authheader).send(unit1));
        value = req.body;
        statusCode = req.statusCode;
        const idUnit1 = value._id;

        statusCode.should.equal(201);
        verify(value, unit1);

        req = (await request(app).post(url + id + "/units").set(authheader).send(unit2));
        value = req.body;
        statusCode = req.statusCode;
        const idUnit2 = value._id;

        statusCode.should.equal(201);
        verify(value, unit2);

        req = (await request(app).get(url + id + "/units").set(authheader));
        value = req.body;
        statusCode = req.statusCode;

        statusCode.should.equal(200);
        value.should.be.an('array');
        shouldContain(value, unit1);
        shouldContain(value, unit2);

        const today = new Date().getTime();
        const twoDayAfterToday = (new Date()).setDate(new Date().getDate() + 2);

        let uri = encodeURI(url + id + "/price_estimation?from="+ today +"&to=" + twoDayAfterToday);
        req = (await request(app).get(uri).set(authheader));
        value = req.body;
        statusCode = req.statusCode;

        console.log(value);

        statusCode.should.equal(200);
        value.should.be.an('array');

        req = await deleteAuth(id);
        req.statusCode.should.equal(200);
    })
})
