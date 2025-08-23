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
const user2 = new User("Bob");

user.displayInfo();
user2.displayInfo();

// Trường hợp 1: Đổi tên thành tên hợp lệ
try {
    const oldName = user.getName();
    const newName = "Charlie";
    user.setName(newName);
    console.log(`Đổi tên thành công: '${oldName}' -> '${newName}'`);
    user.displayInfo();
} catch (error) {
    console.error("Lỗi:", (error as Error).message);
}

// Trường hợp 2: Đổi tên thành chuỗi rỗng (lỗi)
try {
    const oldName = user2.getName();
    const newName = "";
    user2.setName(newName);  // Đây sẽ gây lỗi
    console.log(`Đổi tên thành công: '${oldName}' -> '${newName}'`);
    user2.displayInfo();
} catch (error) {
    console.error(`Lỗi khi đổi tên '${user2.getName()}':`, (error as Error).message);
}

// Bài 8: Product
import { Product, locSanPham } from './bai8';
console.log("\n=== Bài 8: Product ===");
const products: Product[] = [
    new Product("Laptop", 1500),
    new Product("Mouse", 25),
    new Product("Keyboard", 75),
    new Product("Monitor", 300)
];
console.log("\nDanh sách sản phẩm:");
products.forEach(product => product.displayInfo());
console.log("\nSản phẩm có giá > 100:");
const filteredProducts = locSanPham(products);
filteredProducts.forEach(product => product.displayInfo());

// Bài 9: Animal
import { Animal, Dog, Cat } from './bai9';
console.log("\n=== Bài 9: Animal ===");
const dog = new Dog("GauGau");
const cat = new Cat("Miumiu");
console.log(`${dog.name} says: ${dog.sound()}`);
console.log(`${cat.name} says: ${cat.sound()}`);

// Bài 10: Account
import { Account } from './bai10';
console.log("\n=== Bài 10: Account ===");
const account = new Account(1, "John Doe", 500);
console.log(`Chủ tài khoản: ${account.owner}`);
account.deposit(300);
account.withdraw(200);
console.log(`Số dư hiện tại: $${account.getBalance()}`);