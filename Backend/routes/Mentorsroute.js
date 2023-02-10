const express = require('express')
const mentorRouter = express.Router()
const { getAllMentors, getMentorById,addMentorwithId, getRecommendedMentors } = require('../controller/mentorsController')

mentorRouter.get('/', getAllMentors);
mentorRouter.get('/recommended-mentors', getRecommendedMentors);
mentorRouter.get('/mentor/:id', getMentorById);
mentorRouter.post('/addmentor/:id', addMentorwithId);
module.exports = mentorRouter ;
