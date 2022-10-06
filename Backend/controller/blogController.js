const blog = require('../models/blogMode')

const getAllBlogs = async(req, res, next)=> {
    
    let myblogs;
    try {
        myblogs = blog.find();
    }
    catch (err)
    {
        console.log("Error while fetching all blogs",err);
        res.status(400).json({
            success: false,
            message:"Blogs are not avaiable right now"
        })
    }
    if (!myblogs)
    {
        res.status(404).json({
            success: false,
            message:"Blogs are not found"
        })
    }
    res.status(200).json({
        success: true,
        blogs
    })
}

const getBlogsByAuthorId = async (req,res,next) => {
    
    let id = req.params
    let myblogs;
    try {
        myblogs=blog.find({authorId:id})
    }
    catch (err)
    {
        console.log("Error while fetching blogs by author id: ", err);
        res.status(400).json({
            success: false,
            message:"Blogs are not found"
        })
    }
    if (!myblogs)
    {
        res.status(404).json({
            success: false,
            message:"Blogs are not found"
        })
    }
    res.status(200).json({
        success: true,
        myblogs
    })
}

module.exports = { getAllBlogs, getBlogsByAuthorId };