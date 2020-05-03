import initialState from './initialState';
import produce from 'immer';

export const CategoriesReducer = (state = initialState.categories, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'GET_CATEGORIES_PENDING':
        draft.loader = true;
        break;
      case 'GET_CATEGORIES_SUCCESS':
        draft.items = action.payload;
        draft.loader = false;
        break;
      case 'GET_CATEGORIES_FAIL':
        draft.loader = false;
        break;
      default:
        return draft;
    }
  });
