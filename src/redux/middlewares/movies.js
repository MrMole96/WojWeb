export const moviesMiddleware = store => next => action => {
  if (action.type === 'GET_MOVIES_SUCCESS') {
    let {results} = action.payload;
    action.payload = results;
  }
  next(action);
};
