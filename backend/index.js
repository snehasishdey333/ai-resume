const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const cookieParser=require('cookie-parser')
const connectDB = require('./database/connectDB')
const authRoute = require('./routes/auth')
const resumeRoute = require('./routes/resume')
const userRoute = require('./routes/user')
const premiumRoute=require('./routes/premium')
const { errorHandler } = require('./middlewares/error')
const verifyToken = require('./middlewares/verifyToken')


dotenv.config()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use("/api/auth", authRoute)
app.use("/api/resume", resumeRoute)
app.use("/api/user", userRoute)
app.use("/api/premium",premiumRoute)

app.use(errorHandler)

app.listen(process.env.PORT, () => {
    connectDB()
    console.log('app is running!')
})