import initialState from './initialState';
import produce from 'immer';

export const StarsReducer = (state = initialState.stars, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'GET_STARS_PENDING':
        draft.loader = true;
        break;
      case 'GET_STARS_SUCCESS':
        draft.items = action.payload;
        draft.loader = false;
        break;
      case 'GET_STARS_FAIL':
        draft.loader = false;
        break;
      default:
        return draft;
    }
  });
