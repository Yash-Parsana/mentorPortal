const mongoose = require("mongoose")


const mentorSchema = new mongoose.Schema({
    mentor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    photo: {
        type: String,
    },
    followers: {
        type: Number,
        required: true,
        default:0
    },
    language: {
        type: [String],
        required:true
    },
    experience: {
        type: String,
        // required:true
    },
    industry: {
        type: String,
        required:true
    },
    domain: {
        type: [String],
        required:true
    },
    tools: {
        type: [String],
        required:true
    },
    district: {
        type: String,
        required:true
    },
    state: {
        type: String,
        required:true
    },
    intro: {
        type: String,
        required:true
    }

})
module.exports = mongoose.model('mentor', mentorSchema);
