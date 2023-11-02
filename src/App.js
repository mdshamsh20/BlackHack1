
import "./App.css";
import Footer from './Components/Footer';
import Login from './Components/Login';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Signup from "./Components/Signup";
import Dashboard from "./Components/V2/Dashboard";

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Dashboard/>
      <Footer/>
      
      <div>
      
    </div>
    </div>
  //   <Routes>
  //   <Route path="/" element={<Home/>} />
  //   <Route path="login" element={<Login/>} />
  //   <Route path="signup" element={<Signup/>} />
  //   <Route path="*" element={<div>404</div>} />
  // </Routes>
    
  );
}

export default App;
