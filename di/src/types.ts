import "reflect-metadata";

const TYPES = {
    UserRepository: Symbol.for("UserRepository"),
    UserService: Symbol.for("UserService"),
    UserController: Symbol.for("UserController"),
    UserRoutes: Symbol.for("UserRoutes"),
    ProductRepository: Symbol.for("ProductRepository"),
    ProductService: Symbol.for("ProductService"),
    ProductController: Symbol.for("ProductController"),
    ProductRoutes: Symbol.for("ProductRoutes"),
    AllRoutes: Symbol.for("AllRoutes"),
};

export default TYPES;