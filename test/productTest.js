const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

chai.use(require("chai-things"));
chai.use(require('chai-exclude'));

const request = require('supertest');
const app = require('../index');
const url = "/api/products/"



describe('Unit test product api', function() {

    function verify(got, expected){
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

    function shouldContain(arr, obj){
        expect(arr).excluding(['_id', '__v']).to.include.something.that.deep.equals(obj);
    }

    function shouldNotContain(arr, obj){
        expect(arr).excluding(['_id', '__v']).to.not.include.something.that.deep.equals(obj);
    }

    const adminToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiYWRtaW4iLCJ1c2VybmFtZSI6ImNpYW8iLCJpZCI6ImFzZG9pMDE5MjNlYXNkIiwiaWF0IjoxNjMzNzAwOTY0LCJleHAiOjE2MzYzNzkzNjR9._cIrkGfajb6DbVFiSxD0wU8SUjZ3kI3-ojV8Fu_a0Kw";
    const authheader = {"Authorization": adminToken};

    async function postAuth(prod){
        return await (request(app).post(url).set(authheader).send(prod));
    }

    async function getAuth(){
        return (await request(app).get(url).set(authheader));
    }

    async function getAuthId(id){
        return (await request(app).get(url + id).set(authheader));
    }

    async function patchAuth(id, customer){
        return  (await request(app).patch(url+ id).set(authheader).send(customer));
    }

    async function deleteAuth(id){
        return (await request(app).delete(url + id).set(authheader));
    }

    it('GET should return an array of product', async function() {
        let req = await getAuth();
        let value = req.body;
        let statusCode = req.statusCode;

        statusCode.should.equal(200);
        value.should.be.a("array");

    })

    it('POST should return the posted object and post it on the db', async function() {
        const prod = {
            name: "ProdottoTest1",
            description: "Descrizione test",
            image: "/urldiprova/image1.png",
            category: "Auto",
            subcategory: "Lusso",
            tags: [
                {key: "Marca", value: "bmw"},
                {key: "Colore", value: "Oro"},
            ],
            altproducts: [],
        }

        let req = await postAuth(prod);
        let value = req.body;
        let statusCode = req.statusCode;
        let id = value._id;

        statusCode.should.equal(201);
        verify(value, prod);

        req = await getAuth()
        value = req.body;
        statusCode = req.statusCode;

        statusCode.should.equal(200);
        shouldContain(value, prod);

        req = await deleteAuth(id);
        req.statusCode.should.equal(200);
    })

    it('POST with an object that is not a product should return an error', async function() {
        const wrongProd = {
            name: "ProdottoTest1",
            image: "/urldiprova/image1.png",
            tags: [
                {key: "Marca", value: "bmw"},
                {key: "Colore", value: "Oro"},
            ],
            wrongattr: [],
        }

        let req = await postAuth(wrongProd);
        let value = req.body;
        let statusCode = req.statusCode;
        let id = value._id;
        statusCode.should.equal(400);

        req = await getAuth()
        value = req.body;
        statusCode = req.statusCode;

        statusCode.should.equal(200);
        shouldNotContain(value, wrongProd);
    })

    it('PATCH should change the product in the db', async function() {
        const prod = {
            name: "ProdottoTest2",
            description: "Descrizione test2",
            image: "/urldiprova/image1.png",
            category: "Auto",
            subcategory: "Lusso",
            tags: [
                {key: "Marca", value: "bmw"},
            ],
            altproducts: [],
        }

        const patched = {
            name: "ProdottoTest2",
            description: "descrizione aggiornata",
            image: "/urldiprova/immagine-nuova.png",
            category: "Auto",
            subcategory: "Lusso",
            tags: [
                {key: "Marca", value: "bmw"},
            ],
            altproducts: [],
        }

        let req = await postAuth(prod);
        let value = req.body;
        let statusCode = req.statusCode;
        let id = value._id;
        statusCode.should.equal(201);
        verify(value, prod);

        req = await patchAuth(id, patched);
        value = req.body;
        statusCode = req.statusCode;
        statusCode.should.equal(200);
        verify(value, patched);

        req = await getAuth()
        value = req.body;
        statusCode = req.statusCode;

        statusCode.should.equal(200);
        shouldContain(value, patched);
        shouldNotContain(value, prod);

        req = await deleteAuth(id);
        req.statusCode.should.equal(200);

    })

    it("GET and POST /units shoudl return an array of units", async function() {
        const prod = {
            name: "ProdottoTest4",
            description: "Descrizione test",
            image: "/urldiprova/image1.png",
            category: "Auto",
            subcategory: "Lusso",
            tags: [
                {key: "Marca", value: "bmw"},
                {key: "Colore", value: "Oro"},
            ],
            altproducts: [],
        }

        let req = await postAuth(prod);
        let value = req.body;
        let statusCode = req.statusCode;
        let id = value._id;

        statusCode.should.equal(201);
        verify(value, prod);

        const unit = {
            name: "UnitTest4-1",
            condition: "perfect",
            product: id,
            rentals: []
        }

        req = (await request(app).post(url + id + "/units").set(authheader).send(unit));
        value = req.body;
        statusCode = req.statusCode;

        statusCode.should.equal(201);
        verify(value, unit);

        req = (await request(app).get(url + id + "/units").set(authheader));
        value = req.body;
        statusCode = req.statusCode;

        statusCode.should.equal(200);
        value.should.be.an('array');
        shouldContain(value, unit);

        req = await deleteAuth(id);
        req.statusCode.should.equal(200);
    })
})