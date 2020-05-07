import {combineReducers} from 'redux';
import {TrendingReducer} from './trending';
import {SearchReducer} from './search.js';
import { MoviesReducer } from './movies';
export default combineReducers({
  trending: TrendingReducer,
  movies: MoviesReducer,
  search: SearchReducer,
});
