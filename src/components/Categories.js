import React from 'react';
import { useDispatch } from 'react-redux';
import checkBookStatus from '../redux/category/category';

const BookCategory = () => {
  const handlecheckStatus = (status) => {
    const dispatch = useDispatch();
    dispatch(checkBookStatus(status));
  };
  return (
    <div>
      <button type="button" onClick={handlecheckStatus}>
        Check staus
      </button>
    </div>
  );
};

export default BookCategory;
