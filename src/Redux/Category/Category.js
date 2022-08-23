const CHECKSTATUS = './bookStore/Category/CHECKSTATUS';

const array = [];
const categoryReducer = (state = array, action) => {
  switch (action.type) {
    case CHECKSTATUS:
      return 'Under Construction';
    default:
      return state;
  }
};
export default categoryReducer;

export const actionCreator = () => ({
  type: CHECKSTATUS,
});
