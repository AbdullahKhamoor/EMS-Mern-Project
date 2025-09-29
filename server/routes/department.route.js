import express from "express"
import verifyUser from "../middleware/auth.middleware.js"
import { addDepartment, getDepartments } from "../controllers/department.controller.js"

const router = express.Router()

router.get('/', verifyUser, getDepartments)
router.post('/add', verifyUser, addDepartment)


export default router