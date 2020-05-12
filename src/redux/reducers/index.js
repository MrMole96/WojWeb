import {combineReducers} from 'redux';
import {TrendingReducer} from './trending';
import {SearchReducer} from './search.js';
import { MoviesReducer } from './movies';
import { SeriesReducer } from './series';
import { StarsReducer } from './stars';
export default combineReducers({
  trending: TrendingReducer,
  movies: MoviesReducer,
  series: SeriesReducer,
  stars: StarsReducer,
  search: SearchReducer,
});
