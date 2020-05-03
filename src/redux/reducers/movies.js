import initialState from './initialState';
import produce from 'immer';

export const MoviesReducer = (state = initialState.movies, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'GET_MOVIES_PENDING':
        draft.loader = true;
        break;
      case 'GET_MOVIES_SUCCESS':
        draft.items = action.payload;
        draft.loader = false;
        break;
      case 'GET_MOVIES_FAIL':
        draft.loader = false;
        break;
      default:
        return draft;
    }
  });
