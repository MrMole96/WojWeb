import axios from 'axios';

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

export const getMovies = () => async (dispatch, getState) => {
  const {year, category} = getState().search.movies;
  dispatch(getMoviesPendingHandler());
  try {
    const response = await axios.get('discover/movie', {
      params: {
        year: year,
        with_genres: category,
      },
    });
    dispatch(getMoviesSuccessHandler(response.data));
  } catch (error) {
    dispatch(getMoviesFailHandler(error));
  }
};
