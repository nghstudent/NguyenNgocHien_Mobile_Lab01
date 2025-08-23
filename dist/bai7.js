"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    displayInfo() {
        console.log(`User Name: ${this.name}`);
    }
}
exports.User = User;
