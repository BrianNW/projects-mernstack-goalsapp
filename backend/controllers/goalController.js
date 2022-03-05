// @desc    Get Goals
// @route   GET /api/goals
// @access  Private
const getGoals = (req, res) => {
     res.status(200).json({message: 'Get goals'})   
}

// @desc    Set Goal
// @route   POST /api/goals
// @access  Private
const setGoal = (req, res) => {
    res.status(200).json({message: 'Set goals'})   
}

module.exports = {
    getGoals,
}