/*
* implements a class named 'HolbertonCourse'
*/

export default class HolbertonCourse {
    constructor(name, length, students) {
        if (typeof name === 'string' && typeof length === 'number' && students.every(element => typeof element === 'string')) {
            this._name = name;
            this._length = length;
            this._students = students;
          } else {
            throw new Error('Invalid data provided');
          }
    }

}