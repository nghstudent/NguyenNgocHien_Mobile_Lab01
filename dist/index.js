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
// Bài 7: User
const bai7_1 = require("./bai7");
console.log("\n=== Bài 7: User ===");
const user = new bai7_1.User("Alice");
const user2 = new bai7_1.User("Bob");
user.displayInfo();
user2.displayInfo();
// Trường hợp 1: Đổi tên thành tên hợp lệ
try {
    const oldName = user.getName();
    const newName = "Charlie";
    user.setName(newName);
    console.log(`Đổi tên thành công: '${oldName}' -> '${newName}'`);
    user.displayInfo();
}
catch (error) {
    console.error("Lỗi:", error.message);
}
// Trường hợp 2: Đổi tên thành chuỗi rỗng (lỗi)
try {
    const oldName = user2.getName();
    const newName = "";
    user2.setName(newName); // Đây sẽ gây lỗi
    console.log(`Đổi tên thành công: '${oldName}' -> '${newName}'`);
    user2.displayInfo();
}
catch (error) {
    console.error(`Lỗi khi đổi tên '${user2.getName()}':`, error.message);
}
// Bài 8: Product
const bai8_1 = require("./bai8");
console.log("\n=== Bài 8: Product ===");
const products = [
    new bai8_1.Product("Laptop", 1500),
    new bai8_1.Product("Mouse", 25),
    new bai8_1.Product("Keyboard", 75),
    new bai8_1.Product("Monitor", 300)
];
console.log("\nDanh sách sản phẩm:");
products.forEach(product => product.displayInfo());
console.log("\nSản phẩm có giá > 100:");
const filteredProducts = (0, bai8_1.locSanPham)(products);
filteredProducts.forEach(product => product.displayInfo());
// Bài 9: Animal
const bai9_1 = require("./bai9");
console.log("\n=== Bài 9: Animal ===");
const dog = new bai9_1.Dog("GauGau");
const cat = new bai9_1.Cat("Miumiu");
console.log(`${dog.name} says: ${dog.sound()}`);
console.log(`${cat.name} says: ${cat.sound()}`);
