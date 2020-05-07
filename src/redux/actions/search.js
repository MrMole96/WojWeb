import {useDispatch} from 'react-redux';
import {getTrending} from './trending';

const UPDATE_SEARCH = 'UPDATE_SEARCH';
const UPDATE_MEDIA_TYPE = 'UPDATE_MEDIA_TYPE';

export const updateSearch = data => ({
  type: UPDATE_SEARCH,
  payload: data,
});

export const updateMediaType = mediaType => dispatch => {
  dispatch({
    type: UPDATE_MEDIA_TYPE,
    payload: mediaType,
  });
  dispatch(getTrending());
};
