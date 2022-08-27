/* eslint-disable */
import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { deleteBookFetch } from '../redux/book/book';
import { FaCircleNotch } from 'react-icons/fa';


const BookCollection = ({ item_id, title, author }) => {
  const dispatch = useDispatch();
  
  const handleDelete = (e) => {
    const targetId = Number(e.target.id);
      dispatch(deleteBookFetch(targetId))
  };
  return (
    <div key={item_id} className='container'>
      <span className='cate'>Fiction</span>
      <div className='title'>{title}</div>
      <div className='author'>{author}</div>
      <div className='btn-wrapper'>
      <span>Comment</span>
      <span
            className="delete-btn"
            id={item_id}
            type="button"
            onClick={(e) => handleDelete(e)}
          >
            Remove
          </span>
          <span>Edit</span>
          </div>
          <div className='progress'>
          <p className='prog-icons'><FaCircleNotch size={60} style={{ color: 'blue' }} />
          <span className='percent'>
          <span>65%</span>
          <span>Completed</span>
          </span>
          </p>
          <div className='divider'></div>
          <div className='chap'>
            <span className='chapname'>Current Chapter</span>
            <span className='chapnum'>Chapter 6</span>
            <span className='btnlike'>Update Progress</span>
          </div>
          </div>
    </div>
  );
};

BookCollection.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default BookCollection;