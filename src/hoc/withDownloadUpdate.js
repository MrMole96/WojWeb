import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getTrending} from '../redux/actions/trending';
import {getMovies} from '../redux/actions/movies';
import {getSeries} from '../redux/actions/series';
import {getStars} from '../redux/actions/stars';
import {updateMoviesSearch} from '../redux/actions/search';

export const withDownloadUpdate = WrappedComponent => {
  class HOComponent extends Component {
    componentDidMount() {
      switch (this.props.search.listTitle) {
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
      return (
        <WrappedComponent
          searchData={search[search.listTitle]}
          updateSearchHandler={this.updateSearch}
          {...this.props[this.props.search.listTitle]}
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
