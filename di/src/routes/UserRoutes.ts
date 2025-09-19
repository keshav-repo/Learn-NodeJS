import { inject, injectable } from "inversify";
import { UserController } from "../controllers/userController";
import TYPES from "../types";
import express, { Express } from "express";

@injectable()
export class UserRoutes {

    constructor(@inject(TYPES.UserController) private userController: UserController) {
    }

    initializeRoutes(app: Express.Application) {
        this.getRoutes().forEach((route) => {
            app[route.method](route.path, route.handler);
        });
    }

    getRoutes() {
        return [
            {
                path: "/users",
                method: "get",
                handler: this.userController.getUsers,
            },
        ];
    }
}
