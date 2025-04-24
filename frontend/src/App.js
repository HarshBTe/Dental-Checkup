import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import DentistList from './components/Dentist/DentistList';
import CheckupRequest from './components/Checkup/CheckupRequest';
import CheckupResults from './components/Checkup/CheckupResults';

function App() {
  

  return (
    <Router>
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dentists" element={<DentistList />} />
        <Route path="/checkups/request/:id" element={<CheckupRequest />} />
        <Route path="/checkups/results" element={<CheckupResults />} />
       <Route path="/" element={<Login />} />
        
        
      </Routes>
    </Router>
  );
}

export default App;
