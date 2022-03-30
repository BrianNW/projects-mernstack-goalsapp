const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    // Object name with type of string
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    // Object email with type of string
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    // Object password with type of string
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)