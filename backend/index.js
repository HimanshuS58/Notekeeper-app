import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"

import noteRoute from './routes/noteRoute.js'

const app = express()
dotenv.config();

const port = process.env.PORT || 4002


mongoose.connect(process.env.MONGO_CONNECTION_STRING)
.then(()=>{
    console.log("Connected to MongoDB")
}).catch((error)=>{
    console.log("Error in connecting to MongoDB:", error)
})

app.use(express.json()) // to convert the raw body into json object and fetch it into our req 
app.use(cors());
app.use('/api/v1/noteapp', noteRoute)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})