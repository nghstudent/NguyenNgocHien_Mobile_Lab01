"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
exports.locSanPham = locSanPham;
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    displayInfo() {
        console.log(`Product Info: ${this.name}, Price: $${this.price.toFixed(2)}`);
    }
}
exports.Product = Product;
function locSanPham(Product) {
    return Product.filter(prod => prod.price > 100);
}
