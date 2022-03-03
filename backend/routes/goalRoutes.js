const express = require('express')
const router = express.Router()

//all you need for the .get is the /, as api/goals is already specified in server.js file
//GET A GOAL
router.get('/',(req,res) => {
    res.status(200).json({message: 'Get goals'})
} )

//CREATE A GOAL
router.post('/',(req,res) => {
    res.status(200).json({message: 'Set goal'})
} )

//UPDATE A GOAL
router.put('/:id',(req,res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
} )

//DELETE A GOAL
router.delete('/:id',(req,res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
} )

module.exports = router