const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

chai.use(require("chai-things"));
chai.use(require('chai-exclude'));

const request = require('supertest');
const app = require('../index');
const url = "/api/products/"


describe('Unit test price for price estimanation and modifiers', function () {

    function verify(got, expected) {
        expect(got).excluding(['_id', '__v','productImage']).to.deep.equal(expected);
    }

    function shouldContain(arr, obj) {
        expect(arr).excluding(['_id', '__v' , 'productImage']).to.include.something.that.deep.equals(obj);
    }

    function shouldNotContain(arr, obj) {
        expect(arr).excluding(['_id', '__v']).to.not.include.something.that.deep.equals(obj);
    }

    const adminToken = "fWtuIjIfojFkffmZfQwd4gJaIQqRpqlAK+tbEIQrdLQnBHdnFQUjTSoxcDWxzPzvGlZAVhPJ5gLrl5iDBRSa4A3OGqz4PH92Fodekqotno8bwvbKCCf58xhE3zh8qWeTW0Nj6QZyEq87hHZ7lfdRzBemTqrKQ6BerduytuRrjk6M8xBYfIQJMAE0+uyeGAWItDuhX63/9Erct9817TzJWxZK/lVQK+dVtYKo38v1B56vFET8bJnPPyM5IQNDXCWM7ofM8vpRsybCZ777SSMKYFOjD+yEXqT79Fov1gkv6MlY8d0Ma8xqzNAb+WQ7O1+XULB49xJAi6FlDxjrz/ExUg==";
    const authheader = { "Authorization": adminToken };

    async function postAuth(prod, urlMethod=url) {
        let req = await (request(app).post(urlMethod).set(authheader).send(prod));
        let value = req.body;
        let statusCode = req.statusCode;
        let id = value._id;

        statusCode.should.equal(201);
        verify(value, prod);

        return {value, statusCode, id};
    }

    async function getAuth(urlMethod=url) {
        let req = (await request(app).get(urlMethod).set(authheader));
        let value = req.body;
        let statusCode = req.statusCode;
        let id = value._id;

        statusCode.should.equal(200);
        return {value, statusCode, id};
    }

    async function patchAuth(idMethod, customer) {
        let req = (await request(app).patch(url + idMethod).set(authheader).send(customer));
        let value = req.body;
        let statusCode = req.statusCode;
        let id = value._id;

        statusCode.should.equal(200);
        return {value, statusCode, id};
    }

    async function deleteAuth(idMethod) {
        let req = (await request(app).delete(url + idMethod).set(authheader));
        let value = req.body;
        let statusCode = req.statusCode;
        let id = value._id;

        statusCode.should.equal(200);
        return {value, statusCode, id};
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

        let {id} = await postAuth(prod);

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
        
        const idUnit1 = (await postAuth(unit1, url + id + "/units")).id;

        const idUnit2 = (await postAuth(unit2, url + id + "/units")).id;

        let value = (await getAuth(url + id + "/units")).value;
        value.should.be.an('array');
        shouldContain(value, unit1);
        shouldContain(value, unit2);

        const today = new Date().getTime();
        const twoDayAfterToday = (new Date()).setDate(new Date().getDate() + 2);

        let uri = encodeURI(url + id + "/price_estimation?from="+ today +"&to=" + twoDayAfterToday);

        value = (await getAuth(uri)).value;
        value.should.be.an('array');

        req = await deleteAuth(id);
    })
})
