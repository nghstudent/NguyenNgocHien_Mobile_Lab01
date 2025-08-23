import {Person} from './bai1';
import {Student} from './bai2';
import {Car} from './bai3';
import { Rectangle } from './bai4';

// Bài 1
const person = new Person("John Doe", 30);
person.displayInfo();

// Bài 2
const student = new Student("Jane Doe", 20, "A");
student.displayInfo();

// Bài 3
const car = new Car("Toyota", "Camry", 2020);
car.displayInfo();

// Bài 4
const rectangle = new Rectangle(10, 5);
rectangle.displayInfo();
