import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Components/GeneralCSS/main.css";
import Home from './Components/Home/Home';
import Blogs from './Components/Blog/Blog';
import BlogPage from './Components/Blog/BlogPage';
import UniProfile from './Components/UniversityProfile/UniProfile';
import Studentlog from "./loginsignup/login";
import StudentSign from "./loginsignup/signin";
import StudentForgot from "./loginsignup/forgot1";
import Mainchat from "./Components/chatComp/mainchat";
import Developerlogin from "./Components/loginsigninuser/login";
import Developersignin from "./Components/loginsigninuser/signin";
import Developerforgot from "./Components/loginsigninuser/forgot1";
import Login from "./Components/loginsigninuser/login";
import AddBlog from './Components/Blog/AddBlog';
import MyBlogs from './Components/Blog/MyblogsPage';
import EditBlog from './Components/Blog/EditBlogPage';

import MEvents from './Components/UniversityProfile/MEvents';



import EventPage from './Components/Event/EventPage';
import ResourcePage from './Components/Resource/ResourcePage';
import MHistory from './Components/UniversityProfile/MHistory';
import Profile from './Components/Profile/Profile';
import Myprofilehistory from './Components/Profile/MyProfileHistory';
import MResources from './Components/UniversityProfile/MResources';
import StudentProfile from './Components/Profile/StudentProfile';
import MyProfile from './Components/Profile/MyProfile';
import BecomeMenter from './Components/ProjectUpload/BecomeMenter';
import Pop from './Components/UniversityProfile/Pop';
import Roadmap from './Components/Roadmap/Roadmap';
import FullRoadmapShow from './Components/Roadmap/FullRoadmapShow';
import FullEvent from './Components/Event/FullEvent';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Home/>} />
      <Route index path="/blog" element={<Blogs/>} />
      <Route index path="/blogpage" element={<BlogPage/>} />
      <Route index path="/addblog" element={<AddBlog/>} />
      <Route index path="/myblog" element={<MyBlogs/>} />
      <Route index path="/mentorpage" element={<UniProfile/>} />
      <Route index path="/mentorevents" element={<MEvents/>} />
      <Route index path="/mentorhistory" element={<MHistory/>} />
      <Route index path="/mentorresources" element={<MResources/>} />
      <Route index path="/temp" element={<FullEvent/>} />
      <Route index path="/editblog/:blogid" element={<EditBlog/>} />
      <Route index path="/login" element={<Login/>} />
      <Route index path="/event" element={<EventPage/>} />
      <Route index path="/resources" element={<ResourcePage/>} />
      <Route index path="/profile" element={<Profile/>} />
      <Route index path="/profilehistory" element={<StudentProfile/>} />
      <Route index path="/menteeprofile" element={<MyProfile/>} />
      <Route index path="/pop" element={<Pop/>} />
      <Route index path="/roadmap" element={<Roadmap/>} />
      <Route index path="/FullRoadmapShow" element={<FullRoadmapShow/>} />
      
      <Route index path="/becomementor" element={<BecomeMenter/>} />

      <Route exact path="/slogin" element={<Studentlog />}></Route>
      <Route exact path="/ssignin" element={<StudentSign />}></Route>
      <Route exact path="/sforgot" element={<StudentForgot />}></Route>

      <Route exact path="/login" element={<Developerlogin />}></Route>
      <Route exact path="/signin" element={<Developersignin />}></Route>
      <Route exact path="/forgot" element={<Developerforgot />}></Route>
      <Route exact path="/chat/:to" element={<Mainchat />}></Route>
    </Routes>
  
    <Routes>  
    <Route index path="/slogin/" element={<Studentlog/>} />
  </Routes>   
  </BrowserRouter>
    </div>
  );
}

export default App;
