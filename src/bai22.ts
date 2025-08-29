export class Vehicle22 {
    constructor(public brand: string) {}

    move(): void {
        console.log(`${this.brand} đang di chuyển...`);
    }
}

export class Car22 extends Vehicle22 {
    constructor(brand: string, public model: string) {
        super(brand);
    }

    move(): void {
        console.log(`Xe hơi ${this.brand} ${this.model} đang chạy trên đường`);
    }
}

export class Bike22 extends Vehicle22 {
    constructor(brand: string) {
        super(brand);
    }

    move(): void {
        console.log(`Xe đạp ${this.brand} đang chạy bằng sức người`);
    }
}
