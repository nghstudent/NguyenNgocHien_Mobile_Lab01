"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = exports.Teacher = exports.Student2 = void 0;
const bai1_1 = require("./bai1");
class Student2 extends bai1_1.Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    displayInfo() {
        console.log(`Học sinh: ${this.name}, Tuổi: ${this.age}, Lớp: ${this.grade}`);
    }
}
exports.Student2 = Student2;
class Teacher extends bai1_1.Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    introduce() {
        console.log(`Giáo viên: ${this.name}, Tuổi: ${this.age}, Môn dạy: ${this.subject}`);
    }
}
exports.Teacher = Teacher;
class School {
    constructor(name) {
        this.students = [];
        this.teachers = [];
        this.name = name;
    }
    addStudent(student) {
        this.students.push(student);
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
    displayInfo() {
        console.log(`\nTrường: ${this.name}`);
        console.log("Danh sách học sinh:");
        this.students.forEach(s => s.displayInfo());
        console.log("Danh sách giáo viên:");
        this.teachers.forEach(t => t.introduce());
    }
}
exports.School = School;
