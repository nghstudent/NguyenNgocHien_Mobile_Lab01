"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = exports.Square = exports.Shape = void 0;
class Shape {
}
exports.Shape = Shape;
class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
}
exports.Square = Square;
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
exports.Circle = Circle;
const square = new Square(5);
console.log("Diện tích hình vuông:", square.area());
const circle = new Circle(3);
console.log("Diện tích hình tròn:", circle.area());
