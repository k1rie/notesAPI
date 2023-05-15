import pool from "../db.js"

export const getNotesById = async (req,res)=>{
    const [rows] = await pool.query('SELECT * FROM users WHERE name = ? AND password = ?',[req.params.name,req.params.password])

    if( rows.length > 0){
        const notes = await pool.query('SELECT * FROM notes WHERE created_by = ?',[req.params.id])
        res.send(notes[0])
        console.log("asda")
    }else{
        res.send("Datos incorrectos o inexistentes")
        console.log("err")
    }
}

export const createNote = async (req,res)=>{
    const [rows] = await pool.query('SELECT * FROM users WHERE name = ? AND password = ?',[req.body.name,req.body.password])

    if( rows.length > 0){
        res.send(rows)
        await pool.query('INSERT INTO notes (content,created_by) VALUES (?,?)',[req.body.content,rows[0].id])
    }else{
        res.send("Datos incorrectos o inexistentes")
    }
}


export const deleteNote = async(req,res)=>{
const [rows] = await pool.query('SELECT * FROM users WHERE id = ? AND password = ?',[req.params.created_by,req.params.password])

    if(rows.length > 0){
       const info = await pool.query('DELETE FROM notes WHERE id = ?',[req.params.id])
       res.send({res : "nota eliminada"})
    }else{
        res.send({res:"err"})
    }
}