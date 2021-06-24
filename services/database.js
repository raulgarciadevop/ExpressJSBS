// DATABASE SETUP+
const Pool = require('pg').Pool;
require('dotenv/config'); //This carries all the environment variables

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
});

module.exports = pool;