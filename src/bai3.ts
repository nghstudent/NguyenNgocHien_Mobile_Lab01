export class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    displayInfo(): void {
        console.log(`Thông tin xe: ${this.year} ${this.brand} ${this.model}`);
    }
}