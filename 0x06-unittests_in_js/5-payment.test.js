const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');
const sinon = require('sinon');

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    if (!spy) {
      spy = sinon.spy(console);
    }
  });

  afterEach(() => {
    spy.log.resetHistory();
  });

  it('should log "The total is: 120" to console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.log.calledWith('The total is: 120')).to.be.true;
    expect(spy.log.calledOnce).to.be.true;
  });

  it('should logs "The total is: 20" to console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spy.log.calledWith('The total is: 20')).to.be.true;
    expect(spy.log.calledOnce).to.be.true;
  });
});