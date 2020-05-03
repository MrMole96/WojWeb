import {combineReducers} from 'redux';
import {MoviesReducer} from './movies';
import {CategoriesReducer} from './categories';
export default combineReducers({
  movies: MoviesReducer,
  categories: CategoriesReducer,
});
