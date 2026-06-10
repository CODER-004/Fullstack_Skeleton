import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppNavbar from './components/navbar.jsx';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/profile.jsx';

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const handleStorageChange = () => {
      setAuthToken(localStorage.getItem('token'));
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleAuthSuccess = (token) => {
    localStorage.setItem('token', token);
    setAuthToken(token);
  };

  return (
    <Router>
      <AppNavbar key={authToken} /> 
      
      <Routes>
        <Route path="/login" element={<Login onLoginSuccess={handleAuthSuccess} />} />
        <Route path="/register" element={<Register onRegisterSuccess={handleAuthSuccess} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={authToken ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
}

export default App;
