import { Person } from "./bai1";

export class Student2 extends Person {
    grade: string;
    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }
    displayInfo() {
        console.log(`Học sinh: ${this.name}, Tuổi: ${this.age}, Lớp: ${this.grade}`);
    }
}

export class Teacher extends Person {
    subject: string;
    constructor(name: string, age: number, subject: string) {
        super(name, age);
        this.subject = subject;
    }
    introduce() {
        console.log(`Giáo viên: ${this.name}, Tuổi: ${this.age}, Môn dạy: ${this.subject}`);
    }
}

export class School {
    name: string;
    students: Student2[] = [];
    teachers: Teacher[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addStudent(student: Student2) {
        this.students.push(student);
    }

    addTeacher(teacher: Teacher) {
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
