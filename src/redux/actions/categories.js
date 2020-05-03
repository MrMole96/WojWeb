import axios from 'axios';

const GET_CATEGORIES_PENDING = 'GET_CATEGORIES_PENDING';
const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
const GET_CATEGORIES_FAIL = 'GET_CATEGORIES_FAIL';

const getCategoriesPendingHandler = () => ({
  type: GET_CATEGORIES_PENDING,
});

const getCategoriesSuccessHandler = data => ({
  type: GET_CATEGORIES_SUCCESS,
  payload: data,
});

const getCategoriesFailHandler = err => ({
  type: GET_CATEGORIES_FAIL,
  payload: err,
});

export const getCategories = () => async dispatch => {
  dispatch(getCategoriesPendingHandler());
  try {
    const response = await axios.get('genre/movie/list');
    dispatch(getCategoriesSuccessHandler(response.data));
  } catch (error) {
    dispatch(getCategoriesFailHandler(error));
  }
};
