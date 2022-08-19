import React from 'react';
import { PropTypes } from 'prop-types';

const Book = (props) => {
  const { bookList } = props;

  return (
    <div className="book">
      {bookList.map((book) => (
        <div className="each-book" key={book.id}>
          <h2>{book.title}</h2>
          <h4>{book.author}</h4>
        </div>
      ))}
    </div>
  );
};

Book.propTypes = { bookList: PropTypes.string.isRequired };
export default Book;
