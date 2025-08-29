export class Employee {
    constructor(
        private name: string,
        private position: string,
        private salary: number
    ) {}

    getInfo(): string {
        return `Tên: ${this.name}, Chức vụ: ${this.position}, Lương: ${this.salary} VND`
    }
}
