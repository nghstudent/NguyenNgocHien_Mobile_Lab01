"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    addUser(user) {
        this.users.push(user);
    }
    showBooks() {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(b => {
            console.log(`- ${b.title}, ${b.author}, ${b.year}`);
        });
    }
    showUsers() {
        console.log("Danh sách người dùng trong thư viện:");
        this.users.forEach(u => {
            console.log(`- ${u.getName()}`);
        });
    }
}
exports.Library = Library;
