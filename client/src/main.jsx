import React from 'react';
// import ReactDOM from 'react-dom/mi-porfolio';
import ReactDOM from "react-dom/client";
import App from './App';
import { BrowserRouter } from "react-router-dom";
import './index.css';
// import MiPorfolio from './mi-porfolio';

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
      <App />
    </BrowserRouter>
  // </React.StrictMode>
  );
  
  
  
  