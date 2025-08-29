"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fish = exports.Bird = void 0;
class Bird {
    constructor(name) {
        this.name = name;
    }
    fly() {
        console.log(`${this.name} là một con chim đang bay cao trên bầu trời!`);
    }
}
exports.Bird = Bird;
class Fish {
    constructor(name) {
        this.name = name;
    }
    swim() {
        console.log(`${this.name} là một con cá đang bơi trong nước!`);
    }
}
exports.Fish = Fish;
