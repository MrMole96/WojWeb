import {useDispatch} from 'react-redux';
import {getTrending} from './trending';
import {getMovies} from './movies';
import {getSeries} from './series';
import {getStars} from './stars';

const UPDATE_MOVIES_SEARCH = 'UPDATE_MOVIES_SEARCH';
const UPDATE_SERIES_SEARCH = 'UPDATE_SERIES_SEARCH';
const UPDATE_STARS_SEARCH = 'UPDATE_STARS_SEARCH';
const UPDATE_TRENDING_MEDIA_TYPE = 'UPDATE_TRENDING_MEDIA_TYPE';

export const updateMoviesSearch = data => dispatch => {
  dispatch({
    type: UPDATE_MOVIES_SEARCH,
    payload: data,
  });
  dispatch(getMovies());
};

export const updateSeriesSearch = data => dispatch => {
  dispatch({
    type: UPDATE_SERIES_SEARCH,
    payload: data,
  });
  dispatch(getSeries());
};

export const updateStarsSearch = data => dispatch => {
  dispatch({
    type: UPDATE_STARS_SEARCH,
    payload: data,
  });
  dispatch(getStars());
};

export const updateMediaType = mediaType => dispatch => {
  dispatch({
    type: UPDATE_TRENDING_MEDIA_TYPE,
    payload: mediaType,
  });
  dispatch(getTrending());
};
