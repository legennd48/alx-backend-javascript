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
});
