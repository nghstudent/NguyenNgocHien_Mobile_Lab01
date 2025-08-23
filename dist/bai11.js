"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = exports.Dog = exports.Animal = void 0;
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        return "Âm thanh động vật";
    }
}
exports.Animal = Animal;
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        return "Gâu gâu";
    }
}
exports.Dog = Dog;
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        return "Meo meo";
    }
}
exports.Cat = Cat;
