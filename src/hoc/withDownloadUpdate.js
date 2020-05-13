import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getTrending} from '../redux/actions/trending';

export const withDownloadUpdate = WrappedComponent => {
  class HOComponent extends Component {
    componentDidMount() {
      //this.props.dispatch(fetchData());
      switch (this.props.search.listTitle) {
        case 'Trending':
          this.props.dispatch(getTrending());
          break;

        default:
          break;
      }
    }

    updateSearch = (name, value) => {
      //this.props.dispatch(updateSearch({name: name, value: value}));
    };

    render() {
      return <WrappedComponent {...this.props.trending} {...this.props} />;
    }
  }

  const mapPropsToState = state => {
    const {trending, movies, series, stars, search} = state;
    return {trending, movies, series, stars, search};
  };

  return connect(mapPropsToState)(HOComponent);
};
