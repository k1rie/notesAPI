import express  from "express"
import usersRoutes from "./src/routes/users.routes.js"
import notesRoutes from "./src/routes/notes.routes.js"
import cors from "cors"

const App = express()

App.use(cors())

App.use(express.json())

App.use(usersRoutes)

App.use(notesRoutes)



App.listen(process.env.PORT||3004,()=>{
    console.log("server is listening")
})