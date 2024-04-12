/*
* This module implements a class Airport
*/

export default class Airport {
  constructor(name, code) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw TypeError('name must be a string');
    }

    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw TypeError('Code must be a string');
    }
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }

  // toString() {
  //  return this._code;
  // }
}
