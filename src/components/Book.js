/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeactionCreator } from '../redux/book/book';
// import { useSelector } from 'react-redux/es/hooks/useSelector';

const Book = (props) => {
  const { bookList } = props;

  const dispatch = useDispatch();
  const remove = (e) => {
    const { id } = e.target.parentNode;
    dispatch(
      removeactionCreator(id),
    );
    return (
      <div>
        {Book.map((book) => (
          <Book key={book.id} id={book.id} book={book} remove={remove} />
        ))}
      </div>
    );
  };

  return (
    <div className="book">
      {bookList.map((book) => (
        <>
          <div className="each-book" key={book.id} id={book.id}>
            <li>{book.title}</li>
            <li>{book.author}</li>
            <button type="button" onClick={remove} key={book.id}>Remove</button>
          </div>
        </>
      ))}
    </div>
  );
};

Book.propTypes = { bookList: PropTypes.array.isRequired };
export default Book;
