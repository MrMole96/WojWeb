import {combineReducers} from 'redux';
import {TrendingReducer} from './trending';
import {SearchReducer} from './search.js';
import {MoviesReducer} from './movies';
import {SeriesReducer} from './series';
import {StarsReducer} from './stars';
import {bagReducer} from './bag';
export default combineReducers({
  bag: bagReducer,
  trending: TrendingReducer,
  movies: MoviesReducer,
  series: SeriesReducer,
  stars: StarsReducer,
  search: SearchReducer,
});
