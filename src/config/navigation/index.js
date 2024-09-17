import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from '../../screens/home';
import About from '../../screens/about/'; // Correct path for About component
import NavBar from './navbar';

const Navigation = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<About />} /> {/* Add About route */}
      </Routes>
    </Router>
  );
};

export default Navigation;