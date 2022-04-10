
// @desc    Register new user
// @route   POST api/users/:id
// @access  Public
const registerUser = (req, res) => {
    // test with json and Postman
    res.json({message: 'Register User'})
}

// @desc    Authenticate a user
// @route   POST api/users/login
// @access  Public
const loginUser = (req, res) => {
    // test with json and Postman
    res.json({message: 'Login User'})
}

// @desc    Get user data
// @route   GET api/users/me
// @access  Public
const getMe = (req, res) => {
    // test with json and Postman
    res.json({message: 'Display user data'})
}

module.exports = { registerUser, loginUser,getMe }