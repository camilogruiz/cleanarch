const {pool} = require('./pg-connect')
require('dotenv').config();
exports.UsersService = class UsersService {
    async getUsers() {
        const {rows} = await pool.query('SELECT * FROM users ORDER BY userid ASC')
        return rows
    }


    async createUser({username, password}) {
        const {rows} = await pool.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *', [username, password]);
        return rows[0]
    }
}
