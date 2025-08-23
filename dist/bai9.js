"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = exports.Dog = void 0;
class Dog {
    constructor(name) {
        this.name = name;
    }
    sound() {
        return "Woof!";
    }
}
exports.Dog = Dog;
class Cat {
    constructor(name) {
        this.name = name;
    }
    sound() {
        return "Meow!";
    }
}
exports.Cat = Cat;
