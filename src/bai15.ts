import { Book } from "./bai6"
import { User } from "./bai7"

export class Library {
    private books: Book[] = []
    private users: User[] = []

    addBook(book: Book) {
        this.books.push(book)
    }

    addUser(user: User) {
        this.users.push(user)
    }

    showBooks() {
        console.log("Danh sách sách trong thư viện:")
        this.books.forEach(b => {
            console.log(`- ${b.title}, ${b.author}, ${b.year}`)
        })
    }

    showUsers() {
        console.log("Danh sách người dùng trong thư viện:")
        this.users.forEach(u => {
            console.log(`- ${u.getName()}`)
        })
    }
}
