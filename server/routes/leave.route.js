import express from "express"
import verifyUser from "../middleware/auth.middleware.js"
import { addLeave, getLeave, getLeaves } from "../controllers/leave.controller.js"

const router = express.Router()

router.post('/add', verifyUser, addLeave)
router.get('/:id', verifyUser, getLeave)
router.get('/', verifyUser, getLeaves )


export default router