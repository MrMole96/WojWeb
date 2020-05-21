import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {trendingMiddleware} from './middlewares/trending';
import {moviesMiddleware} from './middlewares/movies';
import {starsMiddleware} from './middlewares/stars';
import { searchMiddleware } from './middlewares/search';

export const store = createStore(
  reducers,
  applyMiddleware(
    thunk,
    logger,
    trendingMiddleware,
    moviesMiddleware,
    starsMiddleware,
    searchMiddleware,
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
