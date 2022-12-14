const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require ('./config/db')
const port = process.env.PORT

connectDB()

// initialize express
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

//direct the '/' to api/goal page
app.use('/api/goals',require('./routes/goalRoutes')) 
app.use('/api/users',require('./routes/userRoutes')) 

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
