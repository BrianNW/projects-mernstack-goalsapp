const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc    Register new user
// @route   POST api/users/:id
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    // add the new user variables from the request's body
    const { name, email, password } = req.body;

    // validation
    if(!name || !email || !password) {
        // bad request
        res.status(400)
        // throw error message
        throw new Error('Please add all fields')
    } 

    // Check if user exists (using the user Model's findOne method) by checking email
    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400)
        throw Error('User already exists')
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password, salt)

    // test with json and Postman
    res.json({message: 'Register User'})
})


// @desc    Authenticate a user
// @route   POST api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    // test with json and Postman
    res.json({message: 'Login User'})
})

// @desc    Get user data
// @route   GET api/users/me
// @access  Public
const getMe = asyncHandler(async (req, res) => {
    // test with json and Postman
    res.json({message: 'Display user data'})
})

module.exports = { registerUser, loginUser,getMe }

