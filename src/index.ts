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
const dog = new Dog("Chó");
const cat = new Cat("Mèo");
console.log(`${dog.name} kêu: ${dog.sound()}`);
console.log(`${cat.name} kêu: ${cat.sound()}`);

// Bài 10: Account
import { Account } from './bai10';
console.log("\n=== Bài 10: Account ===");
const account = new Account(1, "John Doe", 500);
console.log(`Chủ tài khoản: ${account.owner}`);
account.deposit(300);
account.withdraw(200);
console.log(`Số dư hiện tại: $${account.getBalance()}`);

// Bài 11: Animal
import { Animal as Animal11, Dog as Dog11, Cat as Cat11 } from './bai11';
console.log("\n=== Bài 11: Animal ===");
const dog11 = new Dog11("Chó");
const cat11 = new Cat11("Mèo");
console.log(`${dog11.name} kêu: ${dog11.makeSound()}`);
console.log(`${cat11.name} kêu: ${cat11.makeSound()}`);

// Bài 12: Flyable và Swimmable
import { Flyable, Swimmable, Bird, Fish } from './bai12';
console.log("\n=== Bài 12: Flyable và Swimmable ===");
const bird = new Bird("Chim");
const fish = new Fish("Cá");
bird.fly();
fish.swim();

// Bài 13: Shape
import { Square, Circle } from './bai13';
console.log("\n=== Bài 13: Shape ===");
const square = new Square(5);
console.log("Diện tích hình vuông:", square.area());

const circle = new Circle(3);
console.log("Diện tích hình tròn:", circle.area());

//Bài 14
import { runBai14 } from "./bai14"
console.log("\n=== Bài 14: Employee, Manager, Developer ===");
runBai14()

// Bài 15
import { Library } from "./bai15"

console.log("\n=== Bài 15: Thư viện ===")
const library = new Library()

const book1 = new Book("Lập trình TypeScript", "Nguyễn Văn A", 2023)
const book2 = new Book("Học OOP", "Trần Thị B", 2022)

const user3 = new User("Ngọc Hiển")
const user4 = new User("Minh Tuấn")

library.addBook(book1)
library.addBook(book2)
library.addUser(user3)
library.addUser(user4)

library.showBooks()
library.showUsers()

// Bài 16
import { Employee } from "./bai16"

console.log("\n=== Bài 16: Nhân viên ===")
const emp1 = new Employee("Nguyễn Văn A", "Lập trình viên", 20000000)
const emp2 = new Employee("Trần Thị B", "Tester", 15000000)

console.log(emp1.getInfo())
console.log(emp2.getInfo())

// Bài 17
import { Logger } from "./bai17";

console.log("\n=== Bài 17: Logger (Singleton) ===");
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log("Xin chào, đây là logger 1");
logger2.log("Xin chào, đây là logger 2");

console.log("Hai logger có cùng tham chiếu không?", logger1 === logger2);

// Bài 18
import { MathUtil } from "./bai18";

console.log("\n=== Bài 18: MathUtil (Static) ===");
console.log("Cộng:", MathUtil.add(10, 5));
console.log("Trừ:", MathUtil.subtract(10, 5));
console.log("Nhân:", MathUtil.multiply(10, 5));
console.log("Chia:", MathUtil.divide(10, 5));

// Bài 19
import { Animal19, Dog19, Cat19 } from "./bai19";

console.log("\n=== Bài 19: Kế thừa ===");
let animals: Animal19[] = [new Dog19(), new Cat19()];
animals.forEach(a => a.makeSound());

// Bài 20
import { Rectangle20, Circle20 } from "./bai20";

console.log("\n=== Bài 20: Interface Shape ===");
const rect20 = new Rectangle20(4, 5);
console.log("Diện tích hình chữ nhật:", rect20.area());
console.log("Chu vi hình chữ nhật:", rect20.perimeter());

const circle20 = new Circle20(3);
console.log("Diện tích hình tròn:", circle20.area());
console.log("Chu vi hình tròn:", circle20.perimeter());

// Bài 21
import { Employee21, Manager21 } from "./bai21";

console.log("\n=== Bài 21: Employee & Manager ===");
const emp21 = new Employee21("Hùng", 8000);
console.log(emp21.getInfo());

const manager21 = new Manager21("Lan", 15000, "Kinh doanh");
console.log(manager21.getInfo());

// Bài 22
import { Vehicle22, Car22, Bike22 } from "./bai22";

console.log("\n=== Bài 22: Vehicle, Car, Bike ===");
const car22 = new Car22("Toyota", "Vios");
car22.move();

const bike22 = new Bike22("Martin");
bike22.move();

// Bài 23
import { GenericStack } from "./bai23";

console.log("\n=== Bài 23: Generic Stack ===");
const numberStack = new GenericStack<number>();
numberStack.push(10);
numberStack.push(20);
console.log("Phần tử trên cùng (số):", numberStack.peek());
console.log("Pop:", numberStack.pop());
console.log("Stack rỗng?", numberStack.isEmpty());

const stringStack = new GenericStack<string>();
stringStack.push("Xin chào");
stringStack.push("TypeScript");
console.log("Phần tử trên cùng (chuỗi):", stringStack.peek());
console.log("Pop:", stringStack.pop());
console.log("Stack rỗng?", stringStack.isEmpty());
