import express from "express"
import verifyUser from "../middleware/auth.middleware.js"
import { addEmployee, upload, getEmployees, getEmployee, updateEmployee } from "../controllers/employee.controller.js"

const router = express.Router()

router.get('/', verifyUser, getEmployees)
router.post('/add', verifyUser, upload.single('image'), addEmployee)
router.get('/:id', verifyUser, getEmployee)
router.put('/:id', verifyUser, updateEmployee)
// router.delete('/:id', verifyUser, deleteDepartment)


export default router