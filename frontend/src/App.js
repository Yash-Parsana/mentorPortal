import logo from './logo.svg';
import './App.css';
import Header from './Components/Common/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Components/GeneralCSS/main.css";
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Home/>} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
