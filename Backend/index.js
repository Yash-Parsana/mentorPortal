const express = require('express');
const dotenv=require('dotenv')
const connectDb=require('./config/db')
const cors=require('cors')

dotenv.config({
    path: './config/config.env'
});
const app = express();

app.use(express.json([]))
app.use(express.json({
    extended:true
}))
connectDb();

//import routes
const signupLoginRoute = require('./routes/SignUpLoginroute')
const mentorRoute = require('./routes/Mentorsroute')
const eventRouter = require('./routes/eventRouter')
const historyRouter = require('./routes/historyRouter')
const resourceRouter=require('./routes/resourcesRouter')
const blogRouter=require('./routes/blogRouter')
const roadmapRoute=require('./routes/roadmap-routes');

app.use(cors())
app.use('/api/auth', signupLoginRoute);
app.use('/api/mentors', mentorRoute);
app.use('/api/events', eventRouter);
app.use('/api/history', historyRouter);
app.use('/api/resources', resourceRouter);
app.use('/api/blog', blogRouter);
app.use('/api/roadmap' , roadmapRoute);

app.get('/verify/:tocken', async(req,res) => {
    res.status(200).json({
        success: true,
        message:"Email verified"
    })
})


const PORT = 5000||process.env.PORT;
app.listen(PORT, console.log("Server is running")); 

