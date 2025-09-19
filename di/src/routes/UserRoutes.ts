import { inject, injectable } from "inversify";
import { UserController } from "../controllers/userController";
import TYPES from "../types";
import express, { Express } from "express";
import { Router } from "express";

@injectable()
export class UserRoutes {

    userRoutes: Router;

    constructor(@inject(TYPES.UserController) private userController: UserController) {
        this.userRoutes = Router();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.userRoutes.get("/users", this.userController.getUsers);
    }
}
