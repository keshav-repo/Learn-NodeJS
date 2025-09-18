import { injectable } from "inversify";

@injectable()
export class UserRepository {
    private users = [
        { id: 1, name: "John" },
        { id: 2, name: "Anna" },
    ];

    findAll() {
        return this.users;
    }
}