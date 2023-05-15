import pool from "../db.js"


export const loginUser = async (req,res)=>{
    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE name = ? AND password = ?',[req.params.name,req.params.password])
        console.log(rows)
        if(rows.length > 0){
            res.send({
                status: "correct user",
                id: rows[0].id,
                name: rows[0].name,
                password: rows[0].password,
            })
        }else{
            res.send({
                status: "incorrect user"
            })   
        }
    } catch (error) {
res.send(error)
    }
    }

export const createUser = async (req,res)=>{
try {
    const [rows] = await pool.query('SELECT * FROM users WHERE name = ?',[req.body.name])
if(rows.length > 0){

}else{
    const result = await pool.query('INSERT INTO users (name,password) values (TRIM(?),?)',[req.body.name,req.body.password])
    res.send({result: 'account created'})

}
} catch (error) {
    res.status(500).json({
        message: "Sometime goes wrong"
    })
}
}