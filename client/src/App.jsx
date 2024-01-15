import React from 'react';
import { Route, Routes, BrowserRouter, Link, Outlet } from "react-router-dom";
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import OliVino from './pages/OliVino';
import PadresEnsync from './pages/PadresEnsync';
import Biker from './pages/Biker';
import ROLLXPerience from './pages/ROLLXPerience';
import AboutMe from './pages/AboutMe';
import Habilidad from './pages/habilidad';
import Educacion from './pages/Educacion';



function App() {
  return (
    <>
     <nav className="navbar">
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Habilidad">Habilidad</Link></li>
        <li><Link to="/Educacion">Educacion</Link></li>
        <li><Link to="/Contacto">Contacto</Link></li>

        <li><a href="mailto:vanicuc@gmail.com"><img src="email.png" alt="Icono de Mail" /></a></li>
        <li><a href="https://www.linkedin.com/in/vanina-c-90954248"><img src="linkedin.png" alt="Icono de Linkedin" /></a></li>
        <li><a href="https://github.com/vanicuc/Porfolio_VC"><img src="social.png" alt="Icono de Github" /></a></li>
        <li><a href="CV  vanina cucchietti  .pdf"><img src="cv.png" alt="Icono de cv" /></a></li>

     </ul>
      
    </nav>

       <Routes>
        <Route path="/" element={<Home />} /> {/* Cambia "/Home" a "/" */}
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/OliVino" element={<OliVino/>} />
        <Route path="/PadresEnsync" element={<PadresEnsync/>} />
        <Route path="/Biker" element={<Biker/>} />
        <Route path="/ROLLXPerience" element={<ROLLXPerience/>} />
        <Route path="/AboutMe" element={<AboutMe/>} />
        <Route path="/Habilidad" element={<Habilidad/>} />
        <Route path="/Educacion" element={<Educacion/>} />

      </Routes>
    </>
  );
}

export default App;