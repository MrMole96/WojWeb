export const moviesMiddleware = store => next => action => {
  if (
    action.type === 'GET_MOVIES_SUCCESS' ||
    action.type === 'GET_SERIES_SUCCESS' ||
    action.type === 'GET_STARS_SUCCESS'
  ) {
    let {results} = action.payload;
    results = results.map(item => {
      const {title, ...rest} = item;
      return {name: title, ...rest};
    });
    action.payload = results;
  }
  next(action);
};
