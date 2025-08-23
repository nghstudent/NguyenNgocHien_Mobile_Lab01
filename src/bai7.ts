export class User {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
    displayInfo(): void {
        console.log(`User Name: ${this.name}`);
    }
}