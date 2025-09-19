import { inject, injectable } from "inversify";
import TYPES from "../types";
import { Express } from "express";
import { UserRoutes } from "./UserRoutes";
import { ProductRoutes } from "./ProductRoutes";

@injectable()
export class AllRoutes {

    constructor(@inject(TYPES.UserRoutes) private userRoutes: UserRoutes,
        @inject(TYPES.ProductRoutes) private productRoutes: ProductRoutes) {
    }

    initializeRoutes(app: Express.Application) {
        app.use("/user", this.userRoutes.userRoutes);
        app.use("/product", this.productRoutes.productRoutes);
    }
}
