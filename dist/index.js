"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
const bai2_1 = require("./bai2");
const bai3_1 = require("./bai3");
const bai4_1 = require("./bai4");
// Bài 1
const person = new bai1_1.Person("John Doe", 30);
person.displayInfo();
// Bài 2
const student = new bai2_1.Student("Jane Doe", 20, "A");
student.displayInfo();
// Bài 3
const car = new bai3_1.Car("Toyota", "Camry", 2020);
car.displayInfo();
// Bài 4
const rectangle = new bai4_1.Rectangle(10, 5);
rectangle.displayInfo();
