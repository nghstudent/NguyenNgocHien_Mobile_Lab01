class Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    getName(): string{
        return this.name;
    }

    getAge(): number{
        return this.age;
    }
    displayInfo(): void{
        console.log(`Tên: ${this.name}, Tuổi: ${this.age}`);
    }
}
export {Person};