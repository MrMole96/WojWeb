import axios from 'axios';
import initialState from '../reducers/initialState';

const GET_TRENDING_PENDING = 'GET_TRENDING_PENDING';
const GET_TRENDING_SUCCESS = 'GET_TRENDING_SUCCESS';
const GET_TRENDING_FAIL = 'GET_TRENDING_FAIL';

const getTrendingPendingHandler = () => ({
  type: GET_TRENDING_PENDING,
});

const getTrendingSuccessHandler = (data, mediaType) => ({
  type: GET_TRENDING_SUCCESS,
  payload: data,
  mediaType: mediaType,
});

const getTrendingFailHandler = err => ({
  type: GET_TRENDING_FAIL,
  payload: err,
});

export const getTrending = () => async (dispatch, getState) => {
  const mediaType = getState().search.mediaType;
  console.log('getState', getState())
  dispatch(getTrendingPendingHandler());
  try {
    const response = await axios.get(`trending/${mediaType}/week`);
    dispatch(getTrendingSuccessHandler(response.data, mediaType));
  } catch (error) {
    dispatch(getTrendingFailHandler(error));
  }
};
