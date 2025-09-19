import { Container } from "inversify";
import TYPES from "./types";
import { UserRepository } from "./repositories/userRepository";
import { UserService } from "./services/userService";
import { UserController } from "./controllers/userController";
import { UserRoutes } from "./routes/UserRoutes";
import { ProductRepository } from "./repositories/productRepository";
import { ProductService } from "./services/productService";
import { ProductController } from "./controllers/productController";
import { ProductRoutes } from "./routes/ProductRoutes";

const container = new Container();

container.bind<UserRepository>(TYPES.UserRepository).to(UserRepository).inSingletonScope();
container.bind<UserService>(TYPES.UserService).to(UserService).inSingletonScope();
container.bind<UserController>(TYPES.UserController).to(UserController).inSingletonScope();
container.bind<UserRoutes>(TYPES.UserRoutes).to(UserRoutes).inSingletonScope();
container.bind<ProductRepository>(TYPES.ProductRepository).to(ProductRepository).inSingletonScope();
container.bind<ProductService>(TYPES.ProductService).to(ProductService).inSingletonScope();
container.bind<ProductController>(TYPES.ProductController).to(ProductController).inSingletonScope();
container.bind<ProductRoutes>(TYPES.ProductRoutes).to(ProductRoutes).inSingletonScope();


export default container;