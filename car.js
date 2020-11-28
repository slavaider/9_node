class Car {
    constructor(name = 'Unknown name') {
        this.name = name;
    }

    logName() {
        console.log('Car name is', this.name)
    }
}

class BMW extends Car {
    constructor(name) {
        super(name)
    }
}

module.exports.CarClass = Car
module.exports.CarBmwClass = BMW
