export interface Flyable {
  fly(): void;
}

export interface Swimmable {
  swim(): void;
}

export class Bird implements Flyable {
  constructor(public name: string) {}
  fly(): void {
    console.log(`${this.name} là một con chim đang bay cao trên bầu trời!`);
  }
}

export class Fish implements Swimmable {
  constructor(public name: string) {}
  swim(): void {
    console.log(`${this.name} là một con cá đang bơi trong nước!`);
  }
}
