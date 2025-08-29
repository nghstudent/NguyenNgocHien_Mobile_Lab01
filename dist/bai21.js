"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager21 = exports.Employee21 = void 0;
class Employee21 {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getInfo() {
        return `Tên: ${this.name}, Lương: ${this.salary}`;
    }
}
exports.Employee21 = Employee21;
class Manager21 extends Employee21 {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }
    getInfo() {
        return `Tên: ${this.name}, Lương: ${this.salary}, Phòng ban: ${this.department}`;
    }
}
exports.Manager21 = Manager21;
