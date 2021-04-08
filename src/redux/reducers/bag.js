import initialState from './initialState';
import produce from 'immer';

export const bagReducer = (state = initialState.bag, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'TOGGLE_BAG':
        draft.isOpen = !draft.isOpen;
        break;
      case 'ADD_ITEM_BAG':
        draft.items.push(action.payload);
        break;
      case 'REMOVE_ITEM_BAG':
        draft.items = draft.items.filter(x => x.id !== action.payload.id);
        break;
      default:
        return draft;
    }
  });
