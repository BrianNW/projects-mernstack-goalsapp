
// @desc    Register new user
// @route   POST api/users/:id
// @access  Public
const registerUser = (req, res) => {
    res.json({message: 'Register User'})
}

module.exports = { registerUser }