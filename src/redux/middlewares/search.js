export const searchMiddleware = store => next => action => {
  if (action.type === 'GET_CATEGORIES_SUCCESS') {
    const {genres} = action.payload;
    var tempArr = genres;
    action.payload = tempArr;
  }
  next(action);
};
