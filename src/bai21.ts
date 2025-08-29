export class Employee21 {
    constructor(
        public name: string,
        public salary: number
    ) {}

    getInfo(): string {
        return `Tên: ${this.name}, Lương: ${this.salary}`;
    }
}

export class Manager21 extends Employee21 {
    constructor(name: string, salary: number, public department: string) {
        super(name, salary);
    }

    getInfo(): string {
        return `Tên: ${this.name}, Lương: ${this.salary}, Phòng ban: ${this.department}`;
    }
}
