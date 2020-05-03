import axios from 'axios';

const GET_MOVIES_PENDING = 'GET_MOVIES_PENDING';
const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
const GET_MOVIES_FAIL = 'GET_MOVIES_FAIL';

const getMoviesPendingHandler = () => ({
  type: GET_MOVIES_PENDING,
});

const getMoviesSuccessHandler = data => ({
  type: GET_MOVIES_SUCCESS,
  payload: data,
});

const getMoviesFailHandler = err => ({
  type: GET_MOVIES_FAIL,
  payload: err,
});

export const getMovies = () => async dispatch => {
  dispatch(getMoviesPendingHandler());
  try {
    const response = await axios.get('movie/popular');
    dispatch(getMoviesSuccessHandler(response.data));
  } catch (error) {
    dispatch(getMoviesFailHandler(error));
  }
};
