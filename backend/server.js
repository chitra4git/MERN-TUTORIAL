const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT

// initialize express
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

//direct the '/' to api/goal page
app.use('/api/goals',require('./routes/goalRoutes')) 

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
