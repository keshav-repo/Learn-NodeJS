import { inject, injectable } from "inversify";
import { ProductController } from "../controllers/productController";
import TYPES from "../types";
import express, { Express } from "express";
import { Router } from "express";

@injectable()
export class ProductRoutes {

    productRoutes: Router;

    constructor(@inject(TYPES.ProductController) private productController: ProductController) {
        this.productRoutes = Router();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.productRoutes.get("/", this.productController.getProducts);
        this.productRoutes.get("/:id", this.productController.getProductById);
        this.productRoutes.post("/", this.productController.createProduct);
    }
}
