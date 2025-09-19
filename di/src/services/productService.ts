import { inject, injectable } from "inversify";
import { ProductRepository } from "../repositories/productRepository";
import TYPES from "../types";

@injectable()
export class ProductService {
    constructor(
        @inject(TYPES.ProductRepository) private productRepository: ProductRepository
    ) { }

    getAllProducts() {
        return this.productRepository.findAll();
    }

    getProductById(id: number) {
        const product = this.productRepository.findById(id);
        if (!product) {
            throw new Error(`Product with id ${id} not found`);
        }
        return product;
    }

    createProduct(productData: { name: string; price: number; category: string }) {
        // Business logic validation
        if (productData.price <= 0) {
            throw new Error("Product price must be greater than 0");
        }

        if (!productData.name || productData.name.trim().length === 0) {
            throw new Error("Product name is required");
        }

        return this.productRepository.create(productData);
    }
}
