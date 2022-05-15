const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')
const User = require('../models/userModel')

// @desc    Get Goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async(req, res) => {
    
    // mongodb await find function to get all goals (return it below)
    const goals = await Goal.find({ user: req.user.id})

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
        text: req.body.text,
        user: req.user.id
    })

    res.status(200).json(goal)   
})

// @desc    Update Goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {

    // get goal we're trying to update
    const goal = await Goal.findById(req.params.id)

    // then check to make sure if we have it
    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    // Get user
    const user = await User.findById(req.user.id)

    // Check if user exists
    if(!user){        
        res.status(401)
        throw new Error('User not found')
    }

    // // Check if user is authorized
    if(goal.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    // pass the updated goal into const variable using Mongodb find function
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedGoal)
    // res.status(200).json({message: `Update goal ${req.params.id}`})
    
})

// @desc    Delete Goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {

    // get goal we want to delete
    const goal = await Goal.findById(req.params.id)

    // if not exists, throw error
    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    // Get user
    const user = await User.findById(req.user.id)

    // Check if user exists
    if(!user){        
        res.status(401)
        throw new Error('User not found')
    }

    // // Check if user is authorized
    if(goal.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

        // no need to assign to a variable for delete as theres no reason to save it
    await goal.remove();
    
    res.status(200).json({id: req.params.id})
    //OLD// res.status(200).json({message: `Deleted goal ${req.params.id}`})
    
})

module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal,
}