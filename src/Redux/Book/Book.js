/* eslint-disable */

// define constant
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const getBook = 'bookstore/books/getBook';
export const fetchBooks = () => async (dispatch) => {
  const booksFetch = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/vBL8ApZ4vcvWCNS7zsXG/books/', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then((data) => data.json());

  const books = [];
  Object.keys(booksFetch).forEach((e) => {
    books.push({ ...booksFetch[e][0], item_id: e });
  });
  dispatch({
    type: getBook,
    payload: books,
  });
};
// add new book
export const newBookFetch = (book) => async (dispatch) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/vBL8ApZ4vcvWCNS7zsXG/books/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  }).then(() => dispatch(fetchBooks()));  
};
export const deleteBookFetch = (item_id) => async (dispatch) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/vBL8ApZ4vcvWCNS7zsXG/books/${item_id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({item_id}),
  }).then(() => dispatch(fetchBooks()))
};
const initialState = [];
export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state, action.book,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.item_id);
    case getBook:
      return action.payload;
    default:
      return state;
  }
};