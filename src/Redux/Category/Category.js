// define constant
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const categories = [];
const categoriesReducer = (state = categories, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

const checkBookStatus = () => ({
  type: CHECK_STATUS,

});

export default { categoriesReducer, checkBookStatus };
