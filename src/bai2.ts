import { Person } from "./bai1";

export class Student extends Person {
    grade: string;
    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    displayInfo(): void {
        console.log(`Tên: ${this.name}, Tuổi: ${this.age}, Lớp: ${this.grade}`);
    }
}