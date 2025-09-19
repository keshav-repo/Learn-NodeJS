import { inject, injectable } from "inversify";
import { ProductController } from "../controllers/productController";
import TYPES from "../types";
import express, { Express } from "express";

@injectable()
export class ProductRoutes {

    constructor(@inject(TYPES.ProductController) private productController: ProductController) {
    }

    initializeRoutes(app: Express.Application) {
        this.getRoutes().forEach((route) => {
            app[route.method](route.path, route.handler);
        });
    }

    getRoutes() {
        return [
            {
                path: "/products",
                method: "get",
                handler: this.productController.getProducts,
            },
            {
                path: "/products/:id",
                method: "get",
                handler: this.productController.getProductById,
            },
            {
                path: "/products",
                method: "post",
                handler: this.productController.createProduct,
            },
        ];
    }
}
