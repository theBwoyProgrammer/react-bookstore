import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import categoriesReducer from './category/category';
import { bookReducer } from './book/book';

const store = configureStore(
  {
    reducer:
    {
      books: bookReducer,
      categories: categoriesReducer,
    },
  },
  applyMiddleware(thunk),
);

export default store;
