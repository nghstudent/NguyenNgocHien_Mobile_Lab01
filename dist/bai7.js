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
    setName(name) {
        if (name.trim() === "") {
            throw new Error("Tên không được rỗng.");
        }
        this.name = name;
    }
    displayInfo() {
        console.log(`User Name: ${this.name}`);
    }
}
exports.User = User;
