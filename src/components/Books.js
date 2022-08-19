import React, { useState } from 'react';
import Form from './Form';
import Book from './Book';

const Books = () => {
  const [bookList] = useState([
    { title: 'Trapp Diaries', author: 'Hamxi3bwoy', id: 1 },
  ]);
  return (
    <div>
      <Book bookList={bookList} />
      <Form />
    </div>
  );
};

export default Books;
