import "reflect-metadata";
import express, { Express } from "express";
import bodyParser from "body-parser";
import container from "./inversify.config";
import TYPES from "./types";
import { AllRoutes } from "./routes";

const app: Express.Application = express();
app.use(bodyParser.json());

container.get<AllRoutes>(TYPES.AllRoutes).initializeRoutes(app);

app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));
