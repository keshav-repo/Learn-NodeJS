import { inject, injectable } from "inversify";
import { Request, Response } from "express";
import { ProductService } from "../services/productService";
import TYPES from "../types";

@injectable()
export class ProductController {
    constructor(
        @inject(TYPES.ProductService) private productService: ProductService
    ) { }

    getProducts = (req: Request, res: Response) => {
        try {
            const products = this.productService.getAllProducts();
            res.json(products);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    };

    getProductById = (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id);
            const product = this.productService.getProductById(id);
            res.json(product);
        } catch (error) {
            if (error instanceof Error && error.message.includes("not found")) {
                res.status(404).json({ error: error.message });
            } else {
                res.status(500).json({ error: "Internal server error" });
            }
        }
    };

    createProduct = (req: Request, res: Response) => {
        try {
            const product = this.productService.createProduct(req.body);
            res.status(201).json(product);
        } catch (error) {
            if (error instanceof Error && (error.message.includes("price") || error.message.includes("name"))) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(500).json({ error: "Internal server error" });
            }
        }
    };
}
