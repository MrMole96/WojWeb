import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { trendingMiddleware } from './middlewares/trending';
import { moviesMiddleware } from './middlewares/movies';

export const store = createStore(
  reducers,
  applyMiddleware(thunk, logger, trendingMiddleware, moviesMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
