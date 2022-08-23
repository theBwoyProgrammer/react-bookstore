import React from 'react';

const Form = () => {
  const add = () => {
    alert('Adding');
  };
  return (
    <div className="form">
      <h3>ADD NEW BOOK</h3>
      <form>
        <input type="text" />
        <select>
          <option value="Categories">Categories</option>
          <option value="Books">Books</option>
        </select>
        <button type="button" onClick={add}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
