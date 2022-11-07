exports.UserEntity = class UserEntity {
    constructor({username, password}) {
        this.username = username;
        this.password = password;
    }

    validate() {
        if(this.password.length < 6) {
            throw new Error('Invalid password');
        }
    }
}