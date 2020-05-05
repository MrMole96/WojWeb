import { useDispatch } from 'react-redux';
import { getMovies } from './movies';

const UPDATE_SEARCH = 'UPDATE_SEARCH';
const UPDATE_MEDIA_TYPE = 'UPDATE_MEDIA_TYPE';

export const updateSearch = data => ({
  type: UPDATE_SEARCH,
  payload: data,
});

export const updateMediaType = mediaType => dispatch => {
  dispatch(getMovies(mediaType));
  return dispatch({
    type: UPDATE_MEDIA_TYPE,
    payload: mediaType,
  });
};
