import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import JellyLabs from "./pages";
import JellyShop from "./pages/jellyshop";
import Explainer from "./pages/explainer";

function App() {
  return (
    // Wrap your routing logic in BrowserRouter
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<JellyLabs />} />
        <Route path="/jellyshop" element={<JellyShop />} />
        <Route path="/explainer" element={<Explainer />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  )
}

export default App