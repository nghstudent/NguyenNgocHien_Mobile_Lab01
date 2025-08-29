// bai19.ts
export class Animal19 {
    makeSound(): void {
        console.log("Động vật phát ra âm thanh");
    }
}

export class Dog19 extends Animal19 {
    makeSound(): void {
        console.log("Chó sủa: Gâu gâu!");
    }
}

export class Cat19 extends Animal19 {
    makeSound(): void {
        console.log("Mèo kêu: Meo meo!");
    }
}
