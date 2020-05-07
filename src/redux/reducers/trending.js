import initialState from './initialState';
import produce from 'immer';

export const TrendingReducer = (state = initialState.trending, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'GET_TRENDING_PENDING':
        draft.loader = true;
        break;
      case 'GET_TRENDING_SUCCESS':
        draft.items = action.payload;
        draft.loader = false;
        break;
      case 'GET_TRENDING_FAIL':
        draft.loader = false;
        break;
      default:
        return draft;
    }
  });
