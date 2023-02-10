const express = require('express')
const signupLoginRoute = express.Router();
const { studentSignUp,mentorSignUp,saveMentor,loginMentor,loginStudent } = require('../controller/signUpLoginController');

signupLoginRoute.post('/studentsignup', studentSignUp);
signupLoginRoute.post('/mentorsignup', mentorSignUp);
signupLoginRoute.post('/studentlogin', loginStudent);
signupLoginRoute.post('/savementor', saveMentor);
signupLoginRoute.post('/loginmentor', loginMentor);


module.exports=signupLoginRoute
