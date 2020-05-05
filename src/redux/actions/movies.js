import axios from 'axios';
import initialState from '../reducers/initialState';

const GET_MOVIES_PENDING = 'GET_MOVIES_PENDING';
const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
const GET_MOVIES_FAIL = 'GET_MOVIES_FAIL';

const getMoviesPendingHandler = () => ({
  type: GET_MOVIES_PENDING,
});

const getMoviesSuccessHandler = (data, mediaType) => ({
  type: GET_MOVIES_SUCCESS,
  payload: data,
  mediaType: mediaType,
});

const getMoviesFailHandler = err => ({
  type: GET_MOVIES_FAIL,
  payload: err,
});

export const getMovies = (
  mediaType = initialState.search.mediaType,
) => async dispatch => {
  dispatch(getMoviesPendingHandler());
  try {
    const response = await axios.get(`trending/${mediaType}/week`);
    dispatch(getMoviesSuccessHandler(response.data, mediaType));
  } catch (error) {
    dispatch(getMoviesFailHandler(error));
  }
};
