import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Update from '../pages/Update';
import Home from '../pages/Home';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/update" element={<Update />} />
    </Routes>
  );
};

export default AppRoutes;
