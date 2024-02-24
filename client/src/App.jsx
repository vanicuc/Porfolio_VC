import React from "react";
import { Route, Routes, BrowserRouter, Link, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import OliVino from "./pages/OliVino";
import PadresEnsync from "./pages/PadresEnsync";
import Biker from "./pages/Biker";
import ROLLXPerience from "./pages/ROLLXPerience";
import Habilidad from "./pages/habilidad";
import Educacion from "./pages/Educacion";


function App() {
  return (
    <>
      <nav className="navbar">
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
        </ul>
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
