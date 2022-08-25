/* eslint-disable import/extensions */
import { useDispatch } from 'react-redux/es/exports';
import { ActionCreator } from '../redux/category/category.js';

const Categories = () => {
  const dispatch = useDispatch();

  const check = () => {
    dispatch(ActionCreator());
  };
  return (
    <button type="button" onClick={check}>Check Status</button>
  );
};

export default Categories;
