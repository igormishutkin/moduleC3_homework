'use strict';

function PowerconsumingDevices(title, current) {    //Создаем функцию энергопотребляющих устройств (и задаем им параметры - наименование и количество тока берущего данным устройством)
    this.title = title;    //переназначаем
    this.current = current;
    this.isConnectedToTheNetwork = false;
}

function calculationOfPowerConsumption(voltage, current) {   //Создаем функцию расчета потребления мощности
    if ((voltage*current) <= 220) {
        console.log("Ваше устройство работает нормально");
    } else {
        console.log("Отключите устройство немедленно!!!");
    }
    return(voltage*current);
}

//Метод - определяющий подключено ли устройство к сети
PowerconsumingDevices.prototype.connected = function() {
    console.log(this.title + " подключен к сети!");
    this.isConnectedToTheNetwork = true;
}

//Метод - определяющий отключено ли устройство от сети
PowerconsumingDevices.prototype.disconnected = function() {
    console.log(this.title + " отключен от сети!");
    this.isConnectedToTheNetwork = false;
}

//Устройство № 1
function Telephone(title, brand, resolution, camera) {
    this.title = title;
    this.brand = brand;
    this.resolution = resolution;
    this.camera = camera; 
    this.isConnectedToTheNetwork = true;
}

Telephone.prototype = new PowerconsumingDevices();

//Устройство № 2
function TV(title, brand, matrix, frequency) {
    this.title = title;
    this.brand = brand;
    this.matrix = matrix;
    this.frequency = frequency; 
    this.isConnectedToTheNetwork = false;
}

TV.prototype = new PowerconsumingDevices();

//Создаем экземпяры устройств
const cellTelephone = new Telephone('HUAWEI', 'HONOR', '1920 x 1080', '12 Mp');
const homeTV = new TV('Mi', 'XIAOMI', 'VA', '144 Hz');

// отключить TV от сети
homeTV.disconnected();
//console.log(homeTV);

// подключить телефон к сети
cellTelephone.connected();
calculationOfPowerConsumption(220, 1);
//console.log(cellTelephone);

// включить TV к сети
homeTV.connected();
calculationOfPowerConsumption(220, 1.36)
//console.log(homeTV);

// отключить телефон от сети
cellTelephone.disconnected();
//console.log(cellTelephone);