const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const { json } = require('express/lib/response')

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
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    // Check if user was created successfully.
    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }

    // test with json and Postman
    // res.json({message: 'Register User'})
})


// @desc    Authenticate a user
// @route   POST api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const {email, password } = req.body

    // Check for user email
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }    

    // test with json and Postman
    // res.json({message: 'Login User'})

})

// @desc    Get user data
// @route   GET api/users/me
// @access  Public
const getMe = asyncHandler(async (req, res) => {
    // test with json and Postman
    res.json({message: 'Display user data'})
})

// Generate JWT that takes in the id and uses the jwt package's sign method which takes in the payload(data i.e id) and secret
const generateToken = (id) => {
    return jwt.sign({id},  process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
}

module.exports = { registerUser, loginUser,getMe }

