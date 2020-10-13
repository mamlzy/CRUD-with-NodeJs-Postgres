const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'asd',
    database: 'data_siswa',
    host: 'localhost',
    port: 5432
})

module.exports = pool