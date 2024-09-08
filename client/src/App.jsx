import React, { useEffect } from "react"; // Importa React y useEffect juntos

import { Route, Routes, BrowserRouter, Link, Outlet } from "react-router-dom";



import Contacto from "./pages/Contacto";
import OliVino from "./pages/OliVino";
import PadresEnsync from "./pages/PadresEnsync";
import Biker from "./pages/Biker";
import ROLLXPerience from "./pages/ROLLXPerience";

import Educacion from "./pages/Educacion";
import Home from "./pages/Home";
import Habilidad from "./pages/Habilidad"

import { redirectOnChange } from "./components/DropdownRedirect";



function App() {

  useEffect(() => {
    redirectOnChange(); // Llama a la función para establecer el redireccionamiento
  }, []);


  return (
    <>
      <nav  className="navbar">
        <div className="navbar_inf">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Habilidad">Skill</Link>
            </li>
            <li>
              <Link to="/Educacion">Education</Link>
            </li>
            <li>
              <Link to="/Contacto">Contact</Link>
            </li>
             <li>
             <select defaultValue="" id="work-experience-dropdown">
                <option value="" disabled>Work</option>
                <option value="/OliVino">OliVino</option>
                <option value="/PadresEnsync">PadresEnsync</option>
                <option value="/Biker">Bikers</option>
                <option value="/ROLLXPerience">ROLLXPerience</option>
              </select>
            </li> 
          </ul>
        </div>

        <div className="Links">
          <li>
            <a href="mailto:vanicuc@gmail.com" target="_blank">
              <img src="email.png" alt="Icono de Mail" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/vanina-c-90954248"
              target="_blank"
            >
              <img src="linkedin.png" alt="Icono de Linkedin" />
            </a>
          </li>
          <li>
            <a href="https://github.com/vanicuc/Porfolio_VC" target="_blank">
              <img src="social.png" alt="Icono de Github" />
            </a>
          </li>
          <li>
            <a href="vanina cucchietti -Desarroladora full stack.pdf" target="_blank">
              <img src="cv.png" alt="Icono de cv" />
            </a>
          </li>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/OliVino" element={<OliVino />} />
        <Route path="/PadresEnsync" element={<PadresEnsync />} />
        <Route path="/Biker" element={<Biker />} />
        <Route path="/ROLLXPerience" element={<ROLLXPerience />} />
        <Route path="/Habilidad" element={<Habilidad />} />
        <Route path="/Educacion" element={<Educacion />} />
      </Routes>
    </>
  );
}

export default App;
