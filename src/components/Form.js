/* eslint-disable */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newBookFetch } from '../redux/book/book';

const AddBook = () => {
  const dispatch = useDispatch();
  const [titleName, setTitle] = useState('');
  const [authorName, setAuthor] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
      const data = {
        item_id: Number(Date.now()),
        title: titleName,
        author: authorName,
        category: 'categories',
      };
      dispatch(newBookFetch(data));
      setTitle('');
    setAuthor('');
 //  }
  };
  return (
    <div>
      <h2 className='add'>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Book title"
          value={titleName}
          onInput={(e) => setTitle(e.target.value)}

        />
        <input
          name="author"
          type="text"
          placeholder="Author"
          value={authorName}
          onInput={(e) => setAuthor(e.target.value)}
        />

<select className='option'>
  <option value="Fiction">Fiction</option>
  <option value="Musical">Musical</option>
  <option value="Adventure">Adeventure</option>
  <option value="Romance">Romance</option>
</select>
        <button className='btnlike' type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};
export default AddBook;