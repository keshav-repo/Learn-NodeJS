import "reflect-metadata";

const TYPES = {
    UserRepository: Symbol.for("UserRepository"),
    UserService: Symbol.for("UserService"),
    UserController: Symbol.for("UserController"),
};

export default TYPES;