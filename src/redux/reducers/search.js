import initialState from './initialState';
import produce from 'immer';

export const SearchReducer = (state = initialState.search, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'UPDATE_MOVIES_SEARCH':
        draft.movies[action.payload.name] = action.payload.value;
        break;
      case 'UPDATE_SERIES_SEARCH':
        draft.series[action.payload.name] = action.payload.value;
        break;
      case 'UPDATE_STARS_SEARCH':
        draft.stars[action.payload.name] = action.payload.value;
        break;
      case 'UPDATE_TRENDING_MEDIA_TYPE':
        draft.trending.mediaType = action.payload;
        break;
      case 'UPDATE_LIST_TITLE':
        draft.listTitle = action.payload;
        break;
      case 'GET_CATEGORIES':
        draft.categories.loader = true;
        break;
      case 'GET_CATEGORIES_SUCCESS':
        draft.categories.items = action.payload;
        draft.categories.loader = false;
        break;
      case 'GET_CATEGORIES_FAIL':
        draft.categories.loader = false;
        break;
      default:
        return draft;
    }
  });
