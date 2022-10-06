const mongoose = require('mongoose')

const event = new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
    },
    mentorId: {
        type: String,
        required:true
    },
    speaker: {
        type: String,
        required:true
    },
    time: {
        type: Date,
        default:Date.now,
    },
    duration: {
        type: String,
    },
    description: {
        type: String,
        required:true
    },
    image: {
        type: String,
        default : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    }
})

module.exports=mongoose.model('event',event)