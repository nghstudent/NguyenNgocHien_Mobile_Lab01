export class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    makeSound(): string {
        return "Âm thanh động vật";
    }
}

export class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    makeSound(): string {
        return "Gâu gâu";
    }
}

export class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }
    makeSound(): string {
        return "Meo meo";
    }
}
