"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Bài 1: Person
const bai1_1 = require("./bai1");
console.log("\n=== Bài 1: Person ===");
const person = new bai1_1.Person("John Doe", 30);
person.displayInfo();
// Bài 2: Student
const bai2_1 = require("./bai2");
console.log("\n=== Bài 2: Student ===");
const student = new bai2_1.Student("Jane Doe", 20, "A");
student.displayInfo();
// Bài 3: Car
const bai3_1 = require("./bai3");
console.log("\n=== Bài 3: Car ===");
const car = new bai3_1.Car("Toyota", "Camry", 2020);
car.displayInfo();
// Bài 4: Rectangl
const bai4_1 = require("./bai4");
console.log("\n=== Bài 4: Rectangle ===");
const rectangle = new bai4_1.Rectangle(10, 5);
rectangle.displayInfo();
// Bài 5: BankAccount
const bai5_1 = require("./bai5");
console.log("\n=== Bài 5: BankAccount ===");
const bankAccount = new bai5_1.BankAccount(1000);
bankAccount.displayInfo();
bankAccount.deposit(500);
bankAccount.withdraw(200);
bankAccount.displayInfo();
// Bài 6: Book
const bai6_1 = require("./bai6");
console.log("\n=== Bài 6: Book ===");
const book = new bai6_1.Book("Dế mèn phiêu lưu ký", "Tô Hoài", 1941);
book.displayInfo();
