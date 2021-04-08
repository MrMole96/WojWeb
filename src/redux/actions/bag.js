const TOGGLE_BAG = 'TOGGLE_BAG';
const ADD_ITEM_BAG = 'ADD_ITEM_BAG';
const REMOVE_ITEM_BAG = 'REMOVE_ITEM_BAG';

export const toggleBagHandler = () => ({
  type: TOGGLE_BAG,
});

export const addItemBagHandler = item => (dispatch, getState) => {
  if (getState().bag.items.indexOf(item) === -1) {
    dispatch({
      type: ADD_ITEM_BAG,
      payload: item,
    });
  }
};

export const removeItemBagHandler = item => ({
  type: REMOVE_ITEM_BAG,
  payload: item,
});
