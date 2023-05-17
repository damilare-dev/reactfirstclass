import React from "react";
import './components/includes/index.css';
import './components/includes/style.css';
import Products from "./pages/Products";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import {Route,  Routes} from 'react-router-dom'
import NavBar from "./components/includes/NavBar";
import 'bootstrap/dist/css/bootstrap.css';
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
function App(){
  return (
  
    <div>
      <NavBar />
     <Routes>
      <Route path="/" element={ <Index />} /> 
     <Route path="/products" element={<Products />} />
     <Route path="/services" element={<ServicesPage />} />
    <Route path="/about" element={<AboutPage />} /> 
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage/>} /> 
      </Routes> 
      </div>
  )
}
export default App