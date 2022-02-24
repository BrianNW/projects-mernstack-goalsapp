const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

// 1st argument for url, 2nd argument is a function
app.get('/api/goals',(req,res) => {
    res.send('Get goals')
} )

app.listen(port, () => console.log(`server on port ${port}`))