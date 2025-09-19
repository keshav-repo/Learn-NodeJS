import "reflect-metadata";
import express, { Express } from "express";
import bodyParser from "body-parser";
import container from "./inversify.config";
import TYPES from "./types";
import { UserController } from "./controllers/userController";
import { UserRepository } from "./repositories/userRepository";
import { UserRoutes } from "./routes/UserRoutes";
import { ProductRoutes } from "./routes/ProductRoutes";

const app: Express.Application = express();
app.use(bodyParser.json());

// resolve controller from container
// const userController: UserController = container.get<UserController>(TYPES.UserController);

// app.get("/users", userController.getUsers);

const userRoutes = container.get<UserRoutes>(TYPES.UserRoutes);
userRoutes.initializeRoutes(app);

const productRoutes = container.get<ProductRoutes>(TYPES.ProductRoutes);
productRoutes.initializeRoutes(app);


app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));