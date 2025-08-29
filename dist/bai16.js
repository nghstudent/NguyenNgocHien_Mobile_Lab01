"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    getInfo() {
        return `Tên: ${this.name}, Chức vụ: ${this.position}, Lương: ${this.salary} VND`;
    }
}
exports.Employee = Employee;
