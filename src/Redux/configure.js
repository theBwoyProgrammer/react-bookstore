import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import bookReducer from './Book/Book';
import categoryReducer from './Category/Category';

const rootReducer = combineReducers({
  Book: bookReducer,
  category: categoryReducer,
});
const store = configureStore(rootReducer);
export default store;
