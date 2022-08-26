import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Header';
import BookCategory from './components/Categories';
import DisplayBooks from './components/BookShow';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<DisplayBooks />} />
      <Route path="/categories" element={<BookCategory />} />
    </Routes>
  </BrowserRouter>
);

export default App;
