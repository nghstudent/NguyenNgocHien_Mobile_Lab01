"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyGenericStack = void 0;
class MyGenericStack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
exports.MyGenericStack = MyGenericStack;
