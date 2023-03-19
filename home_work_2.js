'use strict';

function receivingStringAndObject (string, object) {    //Создаю функцию, принимающую строку и объект
    return (string in object);         
}

const thread = {    //Создаю объект
    name: "DROPS",
    structure: 'wool',
    threadLength: 150,
}


console.log(receivingStringAndObject ("name", thread));    //Проверяю свойство в объекте - правда
console.log(receivingStringAndObject ("width", thread));    //Проверяю свойство в объекте - ложь

