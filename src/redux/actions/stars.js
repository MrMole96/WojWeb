///search/person
import axios from 'axios';
const GET_STARS_PENDING = 'GET_STARS_PENDING';
const GET_STARS_SUCCESS = 'GET_STARS_SUCCESS';
const GET_STARS_FAIL = 'GET_STARS_FAIL';

const getStarsPendingHandler = () => ({
  type: GET_STARS_PENDING,
});

const getStarsSuccessHandler = (data, mediaType) => ({
  type: GET_STARS_SUCCESS,
  payload: data,
  mediaType: mediaType,
});

const getStarsFailHandler = err => ({
  type: GET_STARS_FAIL,
  payload: err,
});

export const getStars = () => async (dispatch, getState) => {
  const {query} = getState().search.stars;
  dispatch(getStarsPendingHandler());
  try {
    const response = await axios.get('search/person', {
      params: {
        query: query,
      },
    });
    setTimeout(() => dispatch(getStarsSuccessHandler(response.data)), 1000);
  } catch (error) {
    dispatch(getStarsFailHandler(error));
  }
};
