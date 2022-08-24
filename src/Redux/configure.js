import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import bookReducer from './book/book';
import categoryReducer from './category/category';

const rootReducer = combineReducers({
  Book: bookReducer,
  category: categoryReducer,
});
const store = configureStore(rootReducer);
export default store;
