import express from "express"
import verifyUser from "../middleware/auth.middleware.js"
import { addLeave, getLeave } from "../controllers/leave.controller.js"

const router = express.Router()

router.post('/add', verifyUser, addLeave)
router.get('/:id', verifyUser, getLeave)


export default router