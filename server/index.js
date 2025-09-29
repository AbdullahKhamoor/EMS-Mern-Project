import express from "express";
import cors from "cors"
import authRouter from "./routes/auth.route.js"
import departmentRouter from "./routes/department.route.js"
import connectTotDatabase from "./db/db.js"

connectTotDatabase()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/department', departmentRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server is Running on port ${process.env.PORT}`)
})