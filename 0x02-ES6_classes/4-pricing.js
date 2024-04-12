import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw TypeError('Amount must be a number');
    }

    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw TypeError('Currency must be an instance of Currency class');
    }
  }

  // setters and getters
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(newAmount) {
    if (typeof newAmount === 'number') {
      this._amount = newAmount;
    } else {
      throw TypeError('Amount must be a number');
    }
  }

  set currency(newCurrency) {
    if (newCurrency instanceof Currency) {
      this._currency = newCurrency;
    } else {
      throw TypeError('Currency must be an instance of Currency class');
    }
  }

  // method that returns formatted attributes
  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  // static method that calculates converted price
  static convertPrice(amount, conversionRate) {
    const price = amount * conversionRate;
    return price
  }
}
