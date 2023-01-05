import { createPool } from 'mysql2/promise'

export const pool = createPool({
    host: 'localhost',
    port: 3306,
    user: 'sqluser',
    password: 'password',
    database: 'asdf'
})


