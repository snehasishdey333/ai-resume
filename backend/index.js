const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path=require('path')
const connectDB = require('./database/connectDB')
const authRoute = require('./routes/auth')
const resumeRoute = require('./routes/resume')
const userRoute = require('./routes/user')
const premiumRoute=require('./routes/premium')
const { errorHandler } = require('./middlewares/error')
const verifyToken = require('./middlewares/verifyToken')

const DIRNAME=path.resolve()
dotenv.config()
app.use(express.json())
app.use(cookieParser())
const corsOptions = {
    origin: process.env.CLIENT_DOMAIN,
    credentials:true
}
app.use(cors(corsOptions))
app.use("/api/auth", authRoute)
app.use("/api/resume",verifyToken, resumeRoute)
app.use("/api/user",verifyToken, userRoute)
app.use("/api/premium",verifyToken, premiumRoute)
app.use(errorHandler)

app.use(express.static(path.join(DIRNAME, "/frontend/dist")))
app.use("*", (_, res) => {
    res.sendFile(path.resolve(DIRNAME,"frontend","dist","index.html"))
})



app.listen(process.env.PORT, () => {
    connectDB()
    console.log('app is running!')
})