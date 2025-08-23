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
        console.log(`Book Info: "${this.title}" by ${this.author}, published in ${this.year}`);
    }
}