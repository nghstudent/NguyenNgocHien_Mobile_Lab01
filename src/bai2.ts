import { Person } from "./bai1";

export class Student extends Person {
    grade: string;
    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    displayInfo(): void {
        // super.displayInfo();
        // console.log(`Grade: ${this.grade}`);
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}