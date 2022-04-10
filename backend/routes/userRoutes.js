const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMe, } = require('../controllers/userController')

// When you make a post request to /api/users, we're adding a user here
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', getMe)

module.exports = router