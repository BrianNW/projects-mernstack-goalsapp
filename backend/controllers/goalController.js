const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

// @desc    Get Goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async(req, res) => {
    
    // mongodb await find function to get all goals (return it below)
    const goals = await Goal.find()

    //return a json of goals from the database
     res.status(200).json(goals)   
})

// @desc    Set Goal
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
    //Check if any texts exist
    if(!req.body.text) {
        throw new Error('Please add a text field')
        // res.status(400).json({message: 'Please add a text field'})
    }

    // add create function that passes in an object
    const goal = await Goal.create({
        text: req.body.text
    })

    res.status(200).json(goal)   
})

// @desc    Update Goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
    
})

// @desc    Delete Goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Deleted goal ${req.params.id}`})
    
})

module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal,
}