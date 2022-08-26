/* eslit-disable */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookCollection from './Books';
import AddBook from './Form';
import { fetchBooks } from '../redux/book/book';

const DisplayBooks = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <ul>
      {books.map((book) => (
        <li key={book.item_id}>
          <BookCollection
            item_id={book.item_id}
            title={book.title}
            author={book.author}
          />
        </li>
      ))}

      <AddBook />
    </ul>
  );
};

export default DisplayBooks;
