import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Components/GeneralCSS/main.css";
import Home from './Components/Home/Home';
import Blogs from './Components/Blog/Blog';
import BlogPage from './Components/Blog/BlogPage';
import AddBlog from './Components/Blog/AddBlog';
import MyBlogs from './Components/Blog/MyblogsPage';
import EditBlog from './Components/Blog/EditBlogPage';

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
      <Route index path="/editblog/:blogid" element={<EditBlog/>} />
      
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
