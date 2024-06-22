import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from "./pages/home"
import {About} from "./pages/about" 
import { Contact } from './pages/contact';
import { Services } from './pages/services';
import { Register } from './pages/register';
import { Login } from './pages/login';
import { Navbar } from './components/Navbar';
// import { Footer } from './components/footer/Footer';


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/> 
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  )
}

export default App
