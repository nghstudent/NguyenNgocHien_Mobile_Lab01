"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const bai1_1 = require("./bai1");
class Student extends bai1_1.Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    displayInfo() {
        console.log(`Tên: ${this.name}, Tuổi: ${this.age}, Lớp: ${this.grade}`);
    }
}
exports.Student = Student;
