import initialState from './initialState';
import produce from 'immer';

export const SeriesReducer = (state = initialState.series, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'GET_SERIES_PENDING':
        draft.loader = true;
        break;
      case 'GET_SERIES_SUCCESS':
        draft.items = action.payload;
        draft.loader = false;
        break;
      case 'GET_SERIES_FAIL':
        draft.loader = false;
        break;
      default:
        return draft;
    }
  });
