import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getTrending} from '../redux/actions/trending';
import {getMovies} from '../redux/actions/movies';
import {getSeries} from '../redux/actions/series';
import {getStars} from '../redux/actions/stars';
import {updateMoviesSearch, updateListTitle} from '../redux/actions/search';

export const withDownloadUpdate = (
  WrappedComponent,
  fetchData,
  updateSearch,
) => {
  class HOComponent extends Component {
    componentDidMount() {
      this.props.navigation.addListener('focus', () => {
        this.props.dispatch(fetchData());
      });
    }

    updateSearch = (name, value) => {
      this.props.dispatch(updateSearch({name: name, value: value}));
    };

    render() {
      var {dispatch, ...props} = this.props;
      return (
        <WrappedComponent updateSearchHandler={this.updateSearch} {...props} />
      );
    }
  }

  return HOComponent;
};
