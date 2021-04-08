export const bagMiddleware = state => next => action => {
  next(action);
};
