const ADD_ITEM_BAG = 'ADD_ITEM_BAG';
const REMOVE_ITEM_BAG = 'REMOVE_ITEM_BAG';

export const addItemBagHandler = item => ({
  type: ADD_ITEM_BAG,
  payload: item,
});

export const removeItemBagHandler = item => ({
  type: REMOVE_ITEM_BAG,
  payload: item,
});
