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
        console.log(`Hình chữ nhật: chiều rộng=${this.width}, chiều cao=${this.height}, diện tích=${this.area()}, chu vi=${this.perimeter()}`);
    }
}