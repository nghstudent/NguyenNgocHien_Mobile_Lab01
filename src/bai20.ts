export interface Shape20 {
    area(): number;
    perimeter(): number;
}

export class Rectangle20 implements Shape20 {
    constructor(private width: number, private height: number) {}

    area(): number {
        return this.width * this.height;
    }

    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}

export class Circle20 implements Shape20 {
    constructor(private radius: number) {}

    area(): number {
        return Math.PI * this.radius * this.radius;
    }

    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}
