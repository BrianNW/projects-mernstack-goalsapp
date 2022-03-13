// @desc    Get Goals
// @route   GET /api/goals
// @access  Private
const getGoals = async (req, res) => {
     res.status(200).json({message: 'Get goals'})   
}

// @desc    Set Goal
// @route   POST /api/goals
// @access  Private
const setGoal = async (req, res) => {
    //Check if any texts exist
    if(!req.body.text) {
        throw new Error('Please add a text field')
        // res.status(400).json({message: 'Please add a text field'})
    }

    res.status(200).json({message: 'Set goal'})   
}

// @desc    Update Goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
    
}

// @desc    Delete Goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = async (req, res) => {
    res.status(200).json({message: `Deleted goal ${req.params.id}`})
    
}

module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal,
}