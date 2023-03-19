'use strict';

function receivingObject (object) {    //Создаю функцию, принимающую объект
    for (let slider in object) {
        if (object.hasOwnProperty(slider)) {    //Вывожу собственные свойства объекта
            console.log(slider, object[slider]);
        }
    }
}

const threads = {    //Создаю объект (нитки для вязания)
    name: "DROPS",
    structure: 'wool',
    threadLength: 150,
}

const spokes = {    //Создаю объект (спицы для вязания)
    name: "LYKKE",
    materials: "tree",
    view: 'removable',
}

receivingObject(threads);    //Выводим собственные свойства объекта - нитки
receivingObject(spokes);    //Выводим собственные свойства объекта - спицы
