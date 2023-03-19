'use strict';

class PowerConsumingDevices {    //Переписываем функцию энергопотребляющих устройств в класс
    constructor(title, current) {
        this.title = title;    //перназначем параметры класса
        this.current = current;
        this.isConnectedToTheNetwork = false;
    }

    //Метод - определяющий подключено ли устройство к сети
    connected() {
        console.log(this.title + " подключен к сети!");
        this.isConnectedToTheNetwork = true;
    }

    //Метод - определяющий отключено ли устройство от сети
    disconnected() {
        console.log(this.title + " отключен от сети!");
        this.isConnectedToTheNetwork = false;
    }
}

//Устройство № 1
class Phone extends PowerConsumingDevices {
    constructor(title, brand, resolution, camera) {
        super(title);
        this.brand = brand;
        this.resolution = resolution;
        this.camera = camera; 
        this.isConnectedToTheNetwork = true;
    }
}

//Устройство № 2
class Tv extends PowerConsumingDevices {
    constructor(title, brand, matrix, frequency) {
        super(title);    
        this.brand = brand;
        this.matrix = matrix;
        this.frequency = frequency; 
        this.isConnectedToTheNetwork = false;
    }
}

//Создаем экземпяры устройств
const cTelephone = new Phone('HUAWEI', 'HONOR', '1920 x 1080', '12 Mp');
const homeTv = new Tv('Mi', 'XIAOMI', 'VA', '144 Hz');

cTelephone.connected();
console.log(cTelephone);

homeTv.disconnected();
console.log(homeTv);

