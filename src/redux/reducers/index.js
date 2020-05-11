import {combineReducers} from 'redux';
import {TrendingReducer} from './trending';
import {SearchReducer} from './search.js';
import { MoviesReducer } from './movies';
import { SeriesReducer } from './series';
export default combineReducers({
  trending: TrendingReducer,
  movies: MoviesReducer,
  series: SeriesReducer,
  search: SearchReducer,
});
