import { Route, Routes, BrowserRouter, Link, Outlet } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;