const mongoose = require('mongoose')

const blog = new mongoose.Schema({
    title: {
        type: String,
        required:true,
    },
    authorId: {
        type: String,
        required:true
    },
    author: {
        type: String,
        required:true,
    },
    date: {
        type: Date,
        required:true
    },
    tag: {
        type: [String],
        required:true
    },
    like: {
        type: Number,
        required:true
    },
    type: {
        type: String,
        required:true
    },
    feedback: {
        type: [{
            rating: {
                type: Number,
            },
            reviews: {
                type: [String],
            }
        }]
    }
})
module.exports = mongoose.model('blog', blog);

