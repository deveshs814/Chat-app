import express from "express"
import authRoutes from './routes/authRoute.js'
import dotenv from 'dotenv'
import { connectDB } from "./lib/db.js";

const app = express();
dotenv.config()

const port = process.env.PORT

app.use(express.json());

app.use('/api/auth',authRoutes)

app.listen(port,() =>{
    console.log(`Server is running on port ${process.env.PORT}`)
    connectDB();
})