'use strict';

function creatAnEmptyObjectWithoutPrototype() {
    return Object.create(null);
}

console.log(creatAnEmptyObjectWithoutPrototype());