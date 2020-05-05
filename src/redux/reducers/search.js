import initialState from './initialState';
import produce from 'immer';

export const SearchReducer = (state = initialState.search, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'UPDATE_SEARCH':
        draft[action.payload.name] = action.payload.value;
        break;
      case 'UPDATE_MEDIA_TYPE':
        draft.mediaType = action.payload;
        break;
      default:
        return draft;
    }
  });
