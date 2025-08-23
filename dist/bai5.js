"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Đã gửi tiền: $${amount}. Số dư mới: $${this.balance}`);
        }
        else {
            console.log("Số tiền gửi phải dương.");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Đã rút tiền: $${amount}. Số dư mới: $${this.balance}`);
        }
        else {
            console.log("Số tiền rút không hợp lệ.");
        }
    }
    displayInfo() {
        console.log(`Số dư: $${this.balance}`);
    }
}
exports.BankAccount = BankAccount;
