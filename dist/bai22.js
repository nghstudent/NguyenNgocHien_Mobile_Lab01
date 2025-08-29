"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike22 = exports.Car22 = exports.Vehicle22 = void 0;
class Vehicle22 {
    constructor(brand) {
        this.brand = brand;
    }
    move() {
        console.log(`${this.brand} đang di chuyển...`);
    }
}
exports.Vehicle22 = Vehicle22;
class Car22 extends Vehicle22 {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }
    move() {
        console.log(`Xe hơi ${this.brand} ${this.model} đang chạy trên đường`);
    }
}
exports.Car22 = Car22;
class Bike22 extends Vehicle22 {
    constructor(brand) {
        super(brand);
    }
    move() {
        console.log(`Xe đạp ${this.brand} đang chạy bằng sức người`);
    }
}
exports.Bike22 = Bike22;
