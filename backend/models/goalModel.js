const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
{
    // We want this user type to be an object id, and ref(reference) the User model.
    // This will allow us to have a user associated with a goal
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    // Object with type of string
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }
}, 
{
    timestamps: true
})

module.exports = mongoose.model('Goal', goalSchema)