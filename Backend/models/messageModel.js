const mongoose = require('mongoose')

const messageModel = mongoose.Schema({
    MessangerName: {
        type: String,
        required:true
    },
    MessangerId: {
        type: String,
        required:true
    },
    message: {
        type: String,
        required:true
    }
})

module.exports=mongoose.model(messageModel)