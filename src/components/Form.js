/* eslint-disable import/extensions */
import { React, useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { addactionCreator } from '../redux/book/book.js';

const Form = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ title: '', author: '' });

  const change = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const add = (e) => {
    e.preventDefault();
    if (form.title.trim() && form.author.trim()) {
      const data = {
        id: Date.now(),
        title: form.title,
        author: form.author,
      };
      dispatch(addactionCreator(data));
      setForm({ title: '', author: '' });
    }
  };
  return (
    <div className="form">
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={add}>
        <input type="text" name="title" onChange={change} value={form.title} />
        <input type="text" name="author" onChange={change} value={form.author} />
        <select>
          <option value="Categories">Categories</option>
          <option value="Books">Books</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
