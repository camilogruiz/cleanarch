const {UserEntity} = require( '../../domain/models/users')
const {UserRepository} = require("../../domain/repository/user-repository");

exports.UserController = class UsersController extends UserRepository {
    constructor (UsersService) {
        super();
        this._userService = UsersService;
    }
    async getAll() {
        let users = await this._userService.getUsers();
        return users
    }
    async adduser(user) {
        try {
            const ue = new UserEntity(user)
            ue.validate();
            let newuser = await this._userService.createUser(user);
            return newuser
        }
        catch (err){
            console.log(err)
            throw err;
        }

    }
    async uptUser() {
        throw new Error('Abstract class');
    }
    async delUser() {
        throw new Error('Abstract class');
    }
}
