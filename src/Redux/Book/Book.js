import { v4 as uuidv4 } from 'uuid';

const ADDBOOK = './bookStore/Book/ADDBOOK';
const REMOVEBOOK = './bookStore/Book/REMOVEBOOK';

export const reduce = [
  {
    title: 'Trapp Diaries',
    author: 'Hamxi3bwoy',
    id: uuidv4(),
  },
  {
    title: 'Slime',
    author: 'Hamxi3bwoy',
    id: uuidv4(),
  },
  {
    title: 'Three Trap Pies',
    author: 'Hamxi3bwoy',
    id: uuidv4(),
  },
  {
    title: 'Wuthering Heights',
    author: 'Emily Bronte',
    id: uuidv4(),
  },
  {
    title: 'Treasure Island',
    author: 'Louis Stevenson',
    id: uuidv4(),
  },
];
// console.log(reduce);
const bookReducer = (state = reduce, action) => {
  switch (action.type) {
    case ADDBOOK:
      return [...state,
        action.book,
      ];
    case REMOVEBOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default bookReducer;

export const addactionCreator = (book) => ({
  type: ADDBOOK,
  book,
});

export const removeactionCreator = (id) => ({
  type: REMOVEBOOK,
  id,
});
