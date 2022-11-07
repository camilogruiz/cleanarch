exports.UserRepository = class UserRepository {
    async getAll() {
        throw new Error('Abstract class');
    }
    async getUserbyID() {
        throw new Error('Abstract class');
    }
    async adduser(UserEntity) {
        throw new Error('Abstract class');
    }
    async uptUser() {
        throw new Error('Abstract class');
    }
    async delUser() {
        throw new Error('Abstract class');
    }
}