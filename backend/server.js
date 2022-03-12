const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const {errorHandler} = require('./middleware/errorMiddleware')

const app = express()

//add middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// 1st argument for url, 2nd argument is a function
// app.get('/api/goals',(req,res) => {
    // res.json({message: 'Get goals'})
    // res.send('Get goals')
// } )

app.use('/api/goals', require('./routes/goalRoutes'))

// Over-writes default express error handler
app.use(errorHandler)

app.listen(port, () => console.log(`server on port ${port}`))