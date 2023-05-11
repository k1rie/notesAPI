import { Router } from "express";
import { loginUser,createUser } from "../controllers/users.controllers.js";

const router = Router()


router.get("/users/:name/:password",loginUser)

router.post("/users",createUser)


export default router