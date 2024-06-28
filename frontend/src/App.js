import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/page";
import Login from "./pages/Login/page";
import Multiform from "./pages/UserForm/page";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/add-details" element={<Multiform/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
