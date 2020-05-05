import {combineReducers} from 'redux';
import {MoviesReducer} from './movies';
import {SearchReducer} from './search.js';
export default combineReducers({
  movies: MoviesReducer,
  search: SearchReducer,
});
