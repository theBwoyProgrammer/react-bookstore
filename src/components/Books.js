import React from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';
import Book from './Book';

const Books = () => {
  const bookList = useSelector((state) => state.Book);

  return (
    <div>
      <Book bookList={bookList} />
      <Form />
    </div>
  );
};

export default Books;
