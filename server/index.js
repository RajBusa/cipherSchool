import express from "express";
import mongoose from "mongoose";
import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'
import cookieParser from 'cookie-parser'

const app = express();

const connect = () => {
mongoose
    .connect("mongodb://localhost:27017/cipherschool")
    .then(() => {
    console.log('Connected to MongoDB')
    })
    .catch((error) => {
    throw error
    })
}

app.use(express.json());
app.use(cookieParser());
app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)

app.listen(8080, () => {
connect()
console.log('Connected to port 8080')
})