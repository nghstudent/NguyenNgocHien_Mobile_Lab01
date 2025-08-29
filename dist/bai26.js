"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyGenericQueue = void 0;
class MyGenericQueue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        return this.items.shift();
    }
    peek() {
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
exports.MyGenericQueue = MyGenericQueue;
