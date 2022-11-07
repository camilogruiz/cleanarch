require('dotenv').config();
const Pool = require('pg').Pool
exports.pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
      rejectUnauthorized: false
  }
})
