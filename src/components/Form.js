import React from 'react';

const Form = () => (
  <div className="form">
    <h3>ADD NEW BOOK</h3>
    <form>
      <input type="text" />
      <select>
        <option value="Categories">Categories</option>
        <option value="Books">Books</option>
      </select>
      <button type="button">ADD BOOK</button>
    </form>
  </div>
);

export default Form;
