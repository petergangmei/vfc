import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from '../../screens/home';
import About from '../../screens/about/'; // Correct path for About component
import ReadScreen from '../../screens/article/read';
import CategoryScreen from '../../screens/home/category';
import NavBar from './navbar';

const Navigation = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/atl/:slug" element={<ReadScreen />} /> 
        <Route path="/cat/:name" element={<CategoryScreen />} /> 

      </Routes>
    </Router>
  );
};

export default Navigation;
