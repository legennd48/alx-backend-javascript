/*
* This module defines the class building
*/

export default class Building {
  constructor(sqft) {
    if (typeof sqft === 'number') {
      this._sqft = sqft;
    } else {
      throw new TypeError('Sqft must be a number');
    }
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  // setter and getter for class attribute

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    if (typeof newSqft !== 'number') {
      throw TypeError('Sqft must be a number');
    }
    this._sqft = newSqft;
  }
}
