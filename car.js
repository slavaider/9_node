class Car {
    constructor(name = 'Unknown name') {
        this.name = name;
    }
    logName() {
        console.log('Car name is', this.name)
    }
}

module.exports.CarClass=Car
global.Car=Car
