export const bagMiddleware = state => next => action => {
  if (action.type === 'ADD_ITEM_BAG') {
    console.log(action.payload);
  }
  next(action);
};
