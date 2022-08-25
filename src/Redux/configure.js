/* eslint-disable import/extensions */
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import bookReducer from './book/book.js';
import categoryReducer from './category/category.js';

const rootReducer = combineReducers({
  Book: bookReducer,
  category: categoryReducer,
});
const store = configureStore({ reducer: rootReducer });
export default store;
