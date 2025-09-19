import { injectable } from "inversify";

@injectable()
export class ProductRepository {
    private products = [
        { id: 1, name: "Laptop", price: 999.99, category: "Electronics" },
        { id: 2, name: "Smartphone", price: 699.99, category: "Electronics" },
        { id: 3, name: "Coffee Mug", price: 12.99, category: "Kitchen" },
    ];

    findAll() {
        return this.products;
    }

    findById(id: number) {
        return this.products.find(product => product.id === id);
    }

    create(product: { name: string; price: number; category: string }) {
        const newProduct = {
            id: this.products.length + 1,
            ...product
        };
        this.products.push(newProduct);
        return newProduct;
    }
}
