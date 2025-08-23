export class Account {
    public id: number;
    private balance: number;
    readonly owner: string;

    constructor(id: number, owner: string, balance: number = 0) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
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
    getBalance(): number {
        return this.balance;
    }
}