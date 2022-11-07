require('dotenv').config();
const Pool = require('pg').Pool
exports.pool = new Pool({
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
})
