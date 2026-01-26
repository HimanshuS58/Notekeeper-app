import express from "express"
import { createNote, deleteNote, getAllNotes, updateNote } from "../controllers/noteController.js";

const router = express.Router();

router.route('/').get(getAllNotes).post(createNote);
router.route('/:id').put(updateNote).delete(deleteNote);


export default router;