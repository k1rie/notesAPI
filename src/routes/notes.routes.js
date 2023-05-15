import { Router } from "express";
import {getNotesById,createNote,deleteNote} from "../controllers/notes.controllers.js"

const router = Router()

router.get("/notes/:name/:password/:id",getNotesById)

router.post("/notes",createNote)

router.delete("/notes/:created_by/:password/:id",deleteNote)

export default router