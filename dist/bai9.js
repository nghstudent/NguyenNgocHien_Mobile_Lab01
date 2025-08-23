"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = exports.Dog = void 0;
class Dog {
    constructor(name) {
        this.name = name;
    }
    sound() {
        return "Gâu gâu";
    }
}
exports.Dog = Dog;
class Cat {
    constructor(name) {
        this.name = name;
    }
    sound() {
        return "Meo meo";
    }
}
exports.Cat = Cat;
