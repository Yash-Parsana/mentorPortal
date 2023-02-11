const mongoose = require('mongoose')

const communityModel = mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    members: {
        type: [String],
        required:false
    }
})

module.exports=mongoose.model(communityModel)