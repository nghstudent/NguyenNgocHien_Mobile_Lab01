"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runBai14 = runBai14;
class Employee {
    constructor(name) {
        this.name = name;
    }
    work() {
        console.log(`${this.name} đang làm việc`);
    }
}
class Manager extends Employee {
    manage() {
        console.log(`${this.name} đang quản lý dự án`);
    }
}
class Developer extends Employee {
    code() {
        console.log(`${this.name} đang lập trình`);
    }
}
function runBai14() {
    const e1 = new Manager("Hải");
    e1.work();
    e1.manage();
    const e2 = new Developer("Minh");
    e2.work();
    e2.code();
}
