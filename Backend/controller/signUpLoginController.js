const express = require('express')
const Mentor = require('../models/mentorModel')
const User = require('../models/UserModel');


const signUp = async (req, res, next) => {

    const { email, mobile, password } = req.body;
    // const { email, mobile, password } = req.body;
    const name = email.split('@', 1);
    console.log('name', name);
    try {
        let userExist = await User.findOne({ email: email })
        if (userExist) {
            if (userExist.password = password) {
                let isUserMentor = await Mentor.findOne({ _id: userExist._id })

                return res.json({
                    success: true,
                    response: {
                        user: userExist, role: isUserMentor ? 'mentor' : 'user'
                    }
                })
            } else {
                return res.json({
                    success: false,
                    response: {
                        msg: "Wrong Password"
                    }
                })
            }

        }
        else {
            let newUser = new User();
            newUser.name = name[0]
            newUser.email = email
            newUser.moblie = mobile
            newUser.password = password

            const savedUser = await newUser.save();
            return res.json({
                success: true,
                response: {
                    user: savedUser, role: 'user',
                }
            })

        }
    }
    catch (err) {
        console.log("Error in mentor signUp: ", err);
    }


}

// const menteeSighUp = async (req, res, next)=> {
//     const { name, email, mobile, password, langauge, intersts} = req.body;

//     console.log("mentee signup...");

//     try {
//         let userExist = await Mentormodel.findOne({ email: email })

//         if (userExist)
//         {
//             res.json({
//                 success: false,
//                 msg:"User already Exist"
//             })
//         }
//         else {
//             let newUser = new Mentormodel();
//             newUser.name=name
//             newUser.email=email
//             newUser.moblie=mobile
//             newUser.password=password
//             newUser.langauge=langauge
//             newUser.intersts=intersts

//             await newUser.save();

//         }
//     }
//     catch (err)
//     {
//         console.log("Error in mentee signUp: ",err);
//     }

// }

// const LoginMentor

module.exports = { signUp };
