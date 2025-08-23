"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
class Rectangle {
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
    displayInfo() {
        console.log(`Rectangle: width=${this.width}, height=${this.height}, area=${this.area()}, perimeter=${this.perimeter()}`);
    }
}
exports.Rectangle = Rectangle;
