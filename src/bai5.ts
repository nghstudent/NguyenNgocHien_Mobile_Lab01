export class BankAccount {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Đã gửi tiền: $${amount}. Số dư mới: $${this.balance}`);
        } else {
            console.log("Số tiền gửi phải dương.");
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Đã rút tiền: $${amount}. Số dư mới: $${this.balance}`);
        } else {
            console.log("Số tiền rút không hợp lệ.");
        }
    }

    displayInfo(): void {
        console.log(`Số dư: $${this.balance}`);
    }
}