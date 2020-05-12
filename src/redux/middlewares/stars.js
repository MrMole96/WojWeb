export const starsMiddleware = store => next => action => {
  if (action.type === 'GET_STARS_SUCCESS') {
    let results = action.payload;
    results = results.map(item => {
      const {profile_path, ...rest} = item;
      return {poster_path: profile_path, ...rest};
    });
    action.payload = results;
  }

  next(action);
};
