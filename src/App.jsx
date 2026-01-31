import { useState } from "react";
import HomePage from "./pages/HomePage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GradesPage from "./pages/student/GradesPage.jsx";
import GradePage from "./pages/student/GradePage.jsx";
import MyLogin from "./pages/Login.jsx";
// import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/grades" element={<GradesPage />} />
        <Route path="/grade/:id" element={<GradePage />} />
        <Route path="/login" element={<MyLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
