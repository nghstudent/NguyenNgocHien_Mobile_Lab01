"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle20 = exports.Rectangle20 = void 0;
class Rectangle20 {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
}
exports.Rectangle20 = Rectangle20;
class Circle20 {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}
exports.Circle20 = Circle20;
