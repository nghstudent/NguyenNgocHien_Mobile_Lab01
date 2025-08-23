export class User {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        if (name.trim() === "") {
            throw new Error("Tên không được rỗng.");
        }
        this.name = name;
    }

    displayInfo(): void {
        console.log(`Tên: ${this.name}`);
    }
}