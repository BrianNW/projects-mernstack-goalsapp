const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMe, } = require('../controllers/userController')
// import auth token protection
const {protect} =  require('../middleware/authMiddleware')

// When you make a post request to /api/users, we're adding a user here
router.post('/', registerUser)
router.post('/login', loginUser)

//apply import auth token protection
router.get('/me', protect, getMe)

module.exports = router