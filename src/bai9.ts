export interface Animal {
    name: string;
    sound(): string;
}

export class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sound(): string {
        return "Gâu gâu";
    }
}
export class Cat implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sound(): string {
        return "Meo meo";
    }
}