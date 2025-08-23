export class Book {
    title: string;
    author: string;
    year: number;
    constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    displayInfo(): void {
        console.log(`Thông tin sách: "${this.title}" của ${this.author}, xuất bản năm ${this.year}`);
    }
}