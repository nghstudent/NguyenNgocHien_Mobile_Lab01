"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(id, owner, balance = 0) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
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
    getBalance() {
        return this.balance;
    }
}
exports.Account = Account;
