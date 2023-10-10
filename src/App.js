import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Template from './components/template';
import About from './pages/About/About.js';
import Contact from './pages/Contact/Contact.js';
import Home from './pages/Home/Home';
import Concept from './pages/Concept/Concept';
import Tarifs from './pages/Tarifs/Tarifs.js';
import Formulaire from './pages/Formulaire/Formulaire.js';
import Avis from './pages/Avis/Avis';
import Envoyer from './pages/Envoyer';
import Cgu from './pages/cgu/cgu';



const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Template/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Avis" element={<Avis/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Concept" element={<Concept/>}/>
        <Route path="/nous-contacter" element={<Formulaire/>}/>
        <Route path='/Envoyer' element={<Envoyer/>}/>
        <Route path="/Tarifs" element={<Tarifs/>}/>
        <Route path='/cgu' element={<Cgu/>}/>
        <Route path="*" element={<Home/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App