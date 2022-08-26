// import React from 'react';
// import './index.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Books from './components/Books';
// import Categories from './components/Categories';

// // eslint-disable-next-line react/prefer-stateless-function
// const App = () => (
//   <BrowserRouter>
//     <Header />
//     <Routes>
//       <Route path="/" element={<Books />} />
//       <Route path="/Categories" element={<Categories />} />
//     </Routes>
//   </BrowserRouter>

// );

// export default App;
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
