import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Payment from './pages/Payment/Payment';
import Book from './pages/Book/Book';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Book" element={<Book />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
