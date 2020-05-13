import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getTrending} from '../redux/actions/trending';
import {getMovies} from '../redux/actions/movies';
import {getSeries} from '../redux/actions/series';
import {getStars} from '../redux/actions/stars';
import {updateMoviesSearch, updateListTitle} from '../redux/actions/search';

export const withDownloadUpdate = WrappedComponent => {
  class HOComponent extends Component {
    componentDidMount() {
      const {name} = this.props.route;
      this.props.dispatch(updateListTitle(name));
      switch (name) {
        case 'trending':
          this.props.dispatch(getTrending());
          break;
        case 'movies':
          this.props.dispatch(getMovies());
          break;
        case 'series':
          this.props.dispatch(getSeries());
          break;
        case 'stars':
          this.props.dispatch(getStars());
          break;
        default:
          break;
      }
    }

    updateSearch = (name, value) => {
      this.props.dispatch(updateMoviesSearch({name: name, value: value}));
    };

    render() {
      const search = this.props.search;
      const title = this.props.route.name;
      return (
        <WrappedComponent
          searchData={search[title]}
          updateSearchHandler={this.updateSearch}
          {...this.props[this.props.route.name]}
          {...this.props}
        />
      );
    }
  }

  const mapPropsToState = state => {
    const {trending, movies, series, stars, search} = state;
    return {trending, movies, series, stars, search};
  };

  return connect(mapPropsToState)(HOComponent);
};
