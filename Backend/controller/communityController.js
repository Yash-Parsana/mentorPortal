const  communityModel  = require('../models/communityModel')


const createCommunity = async (req,res) => {

    const { name } = req.body
    
    try {
        const isExist = await communityModel.findOne({ name: name })
        if (isExist)
        {
            res.status(200).json({
                success: true,
                message:"Community is already Exist with id : " +isExist._id
            })
        }
        else {
            const newComunnity = new communityModel()
            newComunnity.name = name
            await newComunnity.save();
        }
    }
    catch (err)
    {
        console.log("Error while creating community : "+err);
        res.status(502).json({
            success: false,
            message:"Error while creating community : "+err
        })
    }
}
const joinCommunity = async (req,res) => {
    const { userid,communityid } = req.body
    
    try {
        const community = communityModel.findOne({ _id: communityid })
        
        const arr = community.members
        for (let i = 0; i < arr.length; i++)
        {
            
        }

    }
    catch (err)
    {

    }

}

module.exports={createCommunity}