const express = require('express')
const router = express.Router()
const { registerUser } = require('../controllers/userController')

// When you make a post request to /api/users, we're adding a user here
router.post('/', registerUser)

module.exports = router