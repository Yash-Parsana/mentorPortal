const express = require('express')
const blogRouter = express.Router();

const {getAllBlogs, getBlogsByAuthorId} = require('../controller/blogController')

blogRouter.get('/', getAllBlogs);
blogRouter.get('/:id', getBlogsByAuthorId);

module.exports = blogRouter;