const ADDBOOK = './bookStore/Book/ADDBOOK';
const REMOVEBOOK = './bookStore/Book/REMOVEBOOK';

const reduce = [];
const bookReducer = (state = reduce, action) => {
  switch (action.type) {
    case ADDBOOK:
      return [...state,
        action.book,
      ];
    case REMOVEBOOK:
      return state.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
};

export default bookReducer;

export const addactionCreator = (book) => ({
  type: ADDBOOK,
  book,
});

export const removeactionCreator = (book) => ({
  type: REMOVEBOOK,
  book,
});
