import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Template from './components/template';
import About from './pages/About/About.js';
import Contact from './pages/Contact/Contact.js';
import Home from './pages/Home/Home';
import Programmes from './pages/Programmes/Programmes';
import Tarifs from './pages/Tarifs/Tarifs.js';


const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Template/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Programmes" element={<Programmes/>}/>
        <Route path="/Tarifs" element={<Tarifs/>}/>
        <Route path="*" element={<Home/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App