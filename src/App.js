
import "./App.css";
import Footer from './Components/Footer';
import Login from './Components/Login';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Signup from "./Components/Signup";
import About from "./Components/About";
import Topic from "./Components/Topic";
function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup/>} />
        <Route path="about" element={<About/>} />
        <Route path="topic" element={<Topic/>} />


        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer/>
      
      <div>
      
    </div>
    </div>

    
  );
}

export default App;
