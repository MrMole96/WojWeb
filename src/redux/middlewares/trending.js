export const trendingMiddleware = store => next => action => {
  if (action.type === 'GET_TRENDING_SUCCESS') {
    let {results} = action.payload;
    switch (action.mediaType) {
      case 'movie':
        results = results.map(item => {
          const {title, ...rest} = item;
          return {name: title, ...rest};
        });
        break;
      case 'tv':
        break;
      case 'person':
        results = results.map(item => {
          const {profile_path, ...rest} = item;
          return {poster_path: profile_path, ...rest};
        });
        break;

      default:
        break;
    }

    action.payload = results;
  }
  next(action);
};
