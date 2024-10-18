import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddUser from './Adduser';
import Userdetails from './Userdetails';
import Navbar from './Navbar';

const Main = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<AddUser />} />
        <Route path='/userdetails' element={<Userdetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
