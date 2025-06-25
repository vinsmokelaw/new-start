import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Login from './components/Login/Login.jsx';
import LandingPage from './Pages/LandingPage.jsx';
import Handyman from './Pages/HandyMan.jsx';
import Companies from './Pages/Companies.jsx';
import About from './Pages/About.jsx';
import HandymanProfile from './Pages/HandymanProfile.jsx';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />  
        <Route
          path="/landing" element={isAuthenticated ? <LandingPage /> : <Navigate to="/" replace />}/>
        <Route
          path="/handyman" element={isAuthenticated ? <Handyman /> : <Navigate to="/" replace />}/>
        <Route
          path="/companies" element={isAuthenticated ? <Companies /> : <Navigate to="/" replace />}/>
        <Route
          path="/about" element={isAuthenticated ? <About/> : <Navigate to="/" replace />}/> 
        <Route 
          path="/handymanprofile" element={isAuthenticated ? <HandymanProfile /> : <Navigate to="/" replace />}/> 
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
