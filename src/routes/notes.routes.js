import { Router } from "express";
import {getNotesById,createNote} from "../controllers/notes.controllers.js"

const router = Router()

router.get("/notes/:name/:password/:id",getNotesById)

router.post("/notes",createNote)

export default router