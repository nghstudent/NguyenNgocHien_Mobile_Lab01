export class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }

    perimeter(): number {
        return 2 * (this.width + this.height);
    }
    displayInfo(): void {
        console.log(`Rectangle: width=${this.width}, height=${this.height}, area=${this.area()}, perimeter=${this.perimeter()}`);
    }
}