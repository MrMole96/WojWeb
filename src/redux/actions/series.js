import axios from 'axios';

const GET_SERIES_PENDING = 'GET_SERIES_PENDING';
const GET_SERIES_SUCCESS = 'GET_SERIES_SUCCESS';
const GET_SERIES_FAIL = 'GET_SERIES_FAIL';

const getSeriesPendingHandler = () => ({
  type: GET_SERIES_PENDING,
});

const getSeriesSuccessHandler = (data, mediaType) => ({
  type: GET_SERIES_SUCCESS,
  payload: data,
  mediaType: mediaType,
});

const getSeriesFailHandler = err => ({
  type: GET_SERIES_FAIL,
  payload: err,
});

export const getSeries = () => async (dispatch, getState) => {
  const {year, category} = getState().search.series;
  dispatch(getSeriesPendingHandler());
  try {
    const response = await axios.get('discover/tv', {
      params: {
        first_air_date_year: year,
        with_genres: category,
      },
    });
    dispatch(getSeriesSuccessHandler(response.data));
  } catch (error) {
    dispatch(getSeriesFailHandler(error));
  }
};
