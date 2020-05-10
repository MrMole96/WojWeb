import { useDispatch } from 'react-redux';
import { getTrending } from './trending';
import { getMovies } from './movies';

const UPDATE_MOVIES_SEARCH = 'UPDATE_MOVIES_SEARCH';
const UPDATE_SERIES_SEARCH = 'UPDATE_SERIES_SEARCH';
const UPDATE_STARS_SEARCH = 'UPDATE_STAR_SEARCH';
const UPDATE_TRENDING_MEDIA_TYPE = 'UPDATE_TRENDING_MEDIA_TYPE';
const UPDATE_LIST_TITLE = 'UPDATE_LIST_TITLE';

export const updateMoviesSearch = data => dispatch => {
  dispatch({
    type: UPDATE_MOVIES_SEARCH,
    payload: data,
  })
  dispatch(getMovies());
};

export const updateListTitle = data => ({
  type: UPDATE_LIST_TITLE,
  payload: data,
})

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
