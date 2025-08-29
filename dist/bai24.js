"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericPair = void 0;
class GenericPair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    getKey() {
        return this.key;
    }
    getValue() {
        return this.value;
    }
}
exports.GenericPair = GenericPair;
