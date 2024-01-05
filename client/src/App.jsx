import React from 'react';
import { Route, Routes, BrowserRouter, Link, Outlet } from "react-router-dom";
import Home from './pages/Home';


function App() {
  return (
    <>
       <Routes>
        <Route path="/" element={<Home />} /> {/* Cambia "/Home" a "/" */}
      </Routes>
    </>
  );
}

export default App;