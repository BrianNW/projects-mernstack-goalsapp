const express = require('express')
const router = express.Router()
const {getGoals, setGoal, updateGoal, deleteGoal} = require('../controllers/goalController')

// shorthand for .get and .post routes
// router.route('/').get(getGoals).post(setGoal)

//all you need for the .get is the /, as api/goals is already specified in server.js file
//GET A GOAL
router.get('/', getGoals)

//CREATE A GOAL
router.post('/', setGoal)

//UPDATE A GOAL
router.put('/:id', updateGoal)

//DELETE A GOAL
router.delete('/:id',deleteGoal)

module.exports = router