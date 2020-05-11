import {useDispatch} from 'react-redux';
import {getTrending} from './trending';
import {getMovies} from './movies';
import {getSeries} from './series';

const UPDATE_MOVIES_SEARCH = 'UPDATE_MOVIES_SEARCH';
const UPDATE_SERIES_SEARCH = 'UPDATE_SERIES_SEARCH';
const UPDATE_STARS_SEARCH = 'UPDATE_STARS_SEARCH';
const UPDATE_TRENDING_MEDIA_TYPE = 'UPDATE_TRENDING_MEDIA_TYPE';
const UPDATE_LIST_TITLE = 'UPDATE_LIST_TITLE';

export const updateMoviesSearch = data => (dispatch, getState) => {
  switch (getState().search.listTitle) {
    case 'movies': //movies
      dispatch({
        type: UPDATE_MOVIES_SEARCH,
        payload: data,
      });
      dispatch(getMovies());
      break;
    case 'series': //series
      dispatch({
        type: UPDATE_SERIES_SEARCH,
        payload: data,
      });
      dispatch(getSeries());
      break;
    case 'stars': //stars
      dispatch({
        type: UPDATE_STARS_SEARCH,
        payload: data,
      });
      //  dispatch(getMovies());
      break;

    default:
      break;
  }
};

export const updateListTitle = data => ({
  type: UPDATE_LIST_TITLE,
  payload: data,
});

export const updateSeriesSearch = data => ({
  type: UPDATE_SERIES_SEARCH,
  payload: data,
});

export const updateStarsSearch = data => ({
  type: UPDATE_STARS_SEARCH,
  payload: data,
});

export const updateMediaType = mediaType => dispatch => {
  dispatch({
    type: UPDATE_TRENDING_MEDIA_TYPE,
    payload: mediaType,
  });
  dispatch(getTrending());
};
