import { injectable, inject } from "inversify";
import { Request, Response } from "express";
import TYPES from "../types";
import { UserService } from "../services/userService";

@injectable()
export class UserController {
    constructor(
        @inject(TYPES.UserService) private userService: UserService
    ) { }

    getUsers = (req: Request, res: Response) => {
        const users = this.userService.getUsers();
        res.json(users);
    };
}