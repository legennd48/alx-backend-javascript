const { expect } = require('chai');
const request = require('request');

describe('GET /', () => {
    const url = 'http://localhost:7865';

    it('responds with status code 200 and message', (done) => {
        request.get(`${url}/`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        });
    });

    it('GET /cart/:id returns correct response for valid :id', (done) => {
        request.get(`${url}/cart/98`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Payment methods for cart 98');
            done();
        });
    });

    it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
        request.get(`${url}/cart/-98`, (_err, res, _body) => {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
        request.get(`${url}/cart/superster`, (_err, res, _body) => {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    it('POST /login returns login message', (done) => {
        request.post(`${url}/login`, { json: { userName: 'John_snow' } }, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome John_snow');
            done();
        });
    });

    it('GET /available_payments returns valid response', (done) => {
        request.get(`${url}/available_payments`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(JSON.parse(body)).to.be.deep.equal({ payment_methods: { credit_cards: true, paypal: false } });
            done();
        });
    });
});
