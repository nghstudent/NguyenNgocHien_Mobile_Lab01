export class Product {
    name: string;
    price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    displayInfo(): void {
        console.log(`Thông tin sản phẩm: ${this.name}, Giá: $${this.price.toFixed(2)}`);
    }
}

export function locSanPham(Product: Product[]): Product[] {
    return Product.filter(prod => prod.price > 100);
}