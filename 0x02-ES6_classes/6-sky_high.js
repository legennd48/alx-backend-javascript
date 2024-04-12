import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // getter for class attribute
  get floors() {
    return this._floors;
  }

  set floors(newFloors) {
    if (typeof floors === 'number') {
      this._floors = newFloors;
    } else {
      throw TypeError('Floors must be a number');
    }
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}