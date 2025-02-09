import express from "express"
import authRoutes from './routes/authRoute.js'
import dotenv from 'dotenv'
import { connectDB } from "./lib/db.js";
import cookieParser from 'cookie-parser'
import messageRoutes from './routes/messageRoute.js'
import cors from 'cors';
import { app, server } from "./lib/socket.js";
import bodyParser from "body-parser";
dotenv.config()
import path from "path";

const port = process.env.PORT
const __dirname = path.resolve();

app.use(cors({
    origin:'http://localhost:5173',
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials:true
}))

app.use(bodyParser.json({ limit: "50mb" })); // JSON limit
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true })); // URL-encoded limit

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRoutes)
app.use('/api/messages',messageRoutes)

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));

    app.get("*",(req,res) =>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
    })
}


server.listen(port,() =>{
    console.log(`Server is running on port ${process.env.PORT}`)
    connectDB();
})