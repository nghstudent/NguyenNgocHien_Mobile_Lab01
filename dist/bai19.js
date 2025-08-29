"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat19 = exports.Dog19 = exports.Animal19 = void 0;
// bai19.ts
class Animal19 {
    makeSound() {
        console.log("Động vật phát ra âm thanh");
    }
}
exports.Animal19 = Animal19;
class Dog19 extends Animal19 {
    makeSound() {
        console.log("Chó sủa: Gâu gâu!");
    }
}
exports.Dog19 = Dog19;
class Cat19 extends Animal19 {
    makeSound() {
        console.log("Mèo kêu: Meo meo!");
    }
}
exports.Cat19 = Cat19;
