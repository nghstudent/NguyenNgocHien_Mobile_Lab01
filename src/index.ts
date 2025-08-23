// Bài 1: Person
import { Person } from './bai1';
console.log("\n=== Bài 1: Person ===");
const person = new Person("John Doe", 30);
person.displayInfo();

// Bài 2: Student
import { Student } from './bai2';
console.log("\n=== Bài 2: Student ===");
const student = new Student("Jane Doe", 20, "A");
student.displayInfo();

// Bài 3: Car
import { Car } from './bai3';
console.log("\n=== Bài 3: Car ===");
const car = new Car("Toyota", "Camry", 2020);
car.displayInfo();

// Bài 4: Rectangl
import { Rectangle } from './bai4';
console.log("\n=== Bài 4: Rectangle ===");
const rectangle = new Rectangle(10, 5);
rectangle.displayInfo();

// Bài 5: BankAccount
import { BankAccount } from './bai5';
console.log("\n=== Bài 5: BankAccount ===");
const bankAccount = new BankAccount(1000);
bankAccount.displayInfo();
bankAccount.deposit(500);
bankAccount.withdraw(200);
bankAccount.displayInfo();

// Bài 6: Book
import { Book } from './bai6';
console.log("\n=== Bài 6: Book ===");
const book = new Book("Dế mèn phiêu lưu ký", "Tô Hoài", 1941);
book.displayInfo();

// Bài 7: User
import { User } from './bai7';
console.log("\n=== Bài 7: User ===");
const user = new User("Alice");
user.displayInfo();
