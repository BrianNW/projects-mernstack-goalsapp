const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    // Object with type of string
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }
}, 
{
    timestamps: true
})

module.exports = mongoose.model('Goal', goalsSchema)