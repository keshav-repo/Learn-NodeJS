import "reflect-metadata";
import express from "express";
import bodyParser from "body-parser";
import container from "./inversify.config";
import TYPES from "./types";
import { UserController } from "./controllers/userController";

const app = express();
app.use(bodyParser.json());

// resolve controller from container
const userController = container.get<UserController>(TYPES.UserController);

app.get("/users", userController.getUsers);

app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));