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
const dog = new bai9_1.Dog("Chó");
const cat = new bai9_1.Cat("Mèo");
console.log(`${dog.name} kêu: ${dog.sound()}`);
console.log(`${cat.name} kêu: ${cat.sound()}`);
// Bài 10: Account
const bai10_1 = require("./bai10");
console.log("\n=== Bài 10: Account ===");
const account = new bai10_1.Account(1, "John Doe", 500);
console.log(`Chủ tài khoản: ${account.owner}`);
account.deposit(300);
account.withdraw(200);
console.log(`Số dư hiện tại: $${account.getBalance()}`);
// Bài 11: Animal
const bai11_1 = require("./bai11");
console.log("\n=== Bài 11: Animal ===");
const dog11 = new bai11_1.Dog("Chó");
const cat11 = new bai11_1.Cat("Mèo");
console.log(`${dog11.name} kêu: ${dog11.makeSound()}`);
console.log(`${cat11.name} kêu: ${cat11.makeSound()}`);
// Bài 12: Flyable và Swimmable
const bai12_1 = require("./bai12");
console.log("\n=== Bài 12: Flyable và Swimmable ===");
const bird = new bai12_1.Bird("Chim");
const fish = new bai12_1.Fish("Cá");
bird.fly();
fish.swim();
// Bài 13: Shape
const bai13_1 = require("./bai13");
console.log("\n=== Bài 13: Shape ===");
const square = new bai13_1.Square(5);
console.log("Diện tích hình vuông:", square.area());
const circle = new bai13_1.Circle(3);
console.log("Diện tích hình tròn:", circle.area());
//Bài 14
const bai14_1 = require("./bai14");
console.log("\n=== Bài 14: Employee, Manager, Developer ===");
(0, bai14_1.runBai14)();
// Bài 15
const bai15_1 = require("./bai15");
console.log("\n=== Bài 15: Thư viện ===");
const library = new bai15_1.Library();
const book1 = new bai6_1.Book("Lập trình TypeScript", "Nguyễn Văn A", 2023);
const book2 = new bai6_1.Book("Học OOP", "Trần Thị B", 2022);
const user3 = new bai7_1.User("Ngọc Hiển");
const user4 = new bai7_1.User("Minh Tuấn");
library.addBook(book1);
library.addBook(book2);
library.addUser(user3);
library.addUser(user4);
library.showBooks();
library.showUsers();
// Bài 16
const bai16_1 = require("./bai16");
console.log("\n=== Bài 16: Nhân viên ===");
const emp1 = new bai16_1.Employee("Nguyễn Văn A", "Lập trình viên", 20000000);
const emp2 = new bai16_1.Employee("Trần Thị B", "Tester", 15000000);
console.log(emp1.getInfo());
console.log(emp2.getInfo());
// Bài 17
const bai17_1 = require("./bai17");
console.log("\n=== Bài 17: Logger (Singleton) ===");
const logger1 = bai17_1.Logger.getInstance();
const logger2 = bai17_1.Logger.getInstance();
logger1.log("Xin chào, đây là logger 1");
logger2.log("Xin chào, đây là logger 2");
console.log("Hai logger có cùng tham chiếu không?", logger1 === logger2);
// Bài 18
const bai18_1 = require("./bai18");
console.log("\n=== Bài 18: MathUtil (Static) ===");
console.log("Cộng:", bai18_1.MathUtil.add(10, 5));
console.log("Trừ:", bai18_1.MathUtil.subtract(10, 5));
console.log("Nhân:", bai18_1.MathUtil.multiply(10, 5));
console.log("Chia:", bai18_1.MathUtil.divide(10, 5));
// Bài 19
const bai19_1 = require("./bai19");
console.log("\n=== Bài 19: Kế thừa ===");
let animals = [new bai19_1.Dog19(), new bai19_1.Cat19()];
animals.forEach(a => a.makeSound());
// Bài 20
const bai20_1 = require("./bai20");
console.log("\n=== Bài 20: Interface Shape ===");
const rect20 = new bai20_1.Rectangle20(4, 5);
console.log("Diện tích hình chữ nhật:", rect20.area());
console.log("Chu vi hình chữ nhật:", rect20.perimeter());
const circle20 = new bai20_1.Circle20(3);
console.log("Diện tích hình tròn:", circle20.area());
console.log("Chu vi hình tròn:", circle20.perimeter());
// Bài 21
const bai21_1 = require("./bai21");
console.log("\n=== Bài 21: Employee & Manager ===");
const emp21 = new bai21_1.Employee21("Hùng", 8000);
console.log(emp21.getInfo());
const manager21 = new bai21_1.Manager21("Lan", 15000, "Kinh doanh");
console.log(manager21.getInfo());
// Bài 22
const bai22_1 = require("./bai22");
console.log("\n=== Bài 22: Vehicle, Car, Bike ===");
const car22 = new bai22_1.Car22("Toyota", "Vios");
car22.move();
const bike22 = new bai22_1.Bike22("Martin");
bike22.move();
// Bài 23
const bai23_1 = require("./bai23");
console.log("\n=== Bài 23: Generic Stack ===");
const numberStack = new bai23_1.GenericStack();
numberStack.push(10);
numberStack.push(20);
console.log("Phần tử trên cùng (số):", numberStack.peek());
console.log("Pop:", numberStack.pop());
console.log("Stack rỗng?", numberStack.isEmpty());
const stringStack = new bai23_1.GenericStack();
stringStack.push("Xin chào");
stringStack.push("TypeScript");
console.log("Phần tử trên cùng (chuỗi):", stringStack.peek());
console.log("Pop:", stringStack.pop());
console.log("Stack rỗng?", stringStack.isEmpty());
// Bài 24
const bai24_1 = require("./bai24");
console.log("\n=== Bài 24: Generic Pair ===");
const pair1 = new bai24_1.GenericPair("tuổi", 21);
console.log("Key:", pair1.getKey(), "Value:", pair1.getValue());
const pair2 = new bai24_1.GenericPair(1, "một");
console.log("Key:", pair2.getKey(), "Value:", pair2.getValue());
// Bài 25
const bai25_1 = require("./bai25");
console.log("\n=== Bài 25: Generic Stack ===");
const numberStack2 = new bai25_1.MyGenericStack();
numberStack2.push(10);
numberStack2.push(20);
numberStack2.push(30);
console.log("Phần tử trên cùng:", numberStack2.peek());
console.log("Pop:", numberStack2.pop());
console.log("Stack rỗng?", numberStack2.isEmpty());
const stringStack2 = new bai25_1.MyGenericStack();
stringStack2.push("xin");
stringStack2.push("chào");
stringStack2.push("bạn");
console.log("Phần tử trên cùng:", stringStack2.peek());
console.log("Pop:", stringStack2.pop());
console.log("Stack rỗng?", stringStack2.isEmpty());
// Bài 26
const bai26_1 = require("./bai26");
console.log("\n=== Bài 26: Generic Queue ===");
const numberQueue = new bai26_1.MyGenericQueue();
numberQueue.enqueue(1);
numberQueue.enqueue(2);
numberQueue.enqueue(3);
console.log("Phần tử đầu tiên:", numberQueue.peek());
console.log("Dequeue:", numberQueue.dequeue());
console.log("Queue rỗng?", numberQueue.isEmpty());
const stringQueue = new bai26_1.MyGenericQueue();
stringQueue.enqueue("xin");
stringQueue.enqueue("chào");
stringQueue.enqueue("bạn");
console.log("Phần tử đầu tiên:", stringQueue.peek());
console.log("Dequeue:", stringQueue.dequeue());
console.log("Queue rỗng?", stringQueue.isEmpty());
