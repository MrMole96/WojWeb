import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getTrending} from '../redux/actions/trending';
import {getMovies} from '../redux/actions/movies';
import {getSeries} from '../redux/actions/series';
import {getStars} from '../redux/actions/stars';
import {
  updateMoviesSearch,
  updateListTitle,
  getCategories,
} from '../redux/actions/search';

export const withDownloadUpdate = (
  WrappedComponent,
  fetchData,
  updateSearch,
) => {
  class HOComponent extends Component {
    componentDidMount() {
      if (this.props.categories.items.length === 0) {
        this.props.dispatch(getCategories());
      }

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
  function mapStateToProps(state) {
    return {
      categories: state.search.categories,
    };
  }

  return connect(mapStateToProps)(HOComponent);
};
