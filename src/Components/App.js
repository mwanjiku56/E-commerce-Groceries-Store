import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import About from './pages/About';
import NavBar from './NavBar';



function App() {
  return (
    <div className='mb-4'>
      <>
    <NavBar />
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
    </Routes>
      </>
    </div>)
}
export default App;
