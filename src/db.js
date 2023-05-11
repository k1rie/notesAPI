import {createPool} from "mysql2/promise"


 const pool = createPool({
    host: process.env.HOST || 'localhost',
    user: process.env.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORTDB || 3306,
    database: process.env.DATABASE 
})

export default pool
