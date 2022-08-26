/* eslint-disable */
import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { deleteBookFetch } from '../redux/book/book';

const BookCollection = ({ item_id, title, author }) => {
  const dispatch = useDispatch();
  
  const handleDelete = (e) => {
    const targetId = Number(e.target.id);
      dispatch(deleteBookFetch(targetId))
  };
  return (
    <div key={item_id}>
      <div>{title}</div>
      <div>{author}</div>
      <button
            className="delete-btn"
            id={item_id}
            type="button"
            onClick={(e) => handleDelete(e)}
          >
            Remove
          </button>

    </div>
  );
};

BookCollection.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default BookCollection;