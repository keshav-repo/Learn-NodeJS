import { injectable, inject } from "inversify";
import TYPES from "../types";
import { UserRepository } from "../repositories/userRepository";

@injectable()
export class UserService {
    constructor(
        @inject(TYPES.UserRepository) private userRepository: UserRepository
    ) { }

    getUsers() {
        return this.userRepository.findAll();
    }
}