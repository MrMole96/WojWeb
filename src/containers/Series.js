import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Header} from '../components/Header';
import {TopSearchBar} from './TopSearchBar';
import {ListMovies} from '../components/ListMovies';
import {connect} from 'react-redux';
import {getMovies} from '../redux/actions/movies';
import {getSeries} from '../redux/actions/series';
import {updateSeriesSearch, updateMoviesSearch} from '../redux/actions/search';
import {Loading} from '../components/Loading';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D3557',
  },
  loaderDiv: {
    flex: 1,
    justifyContent: 'center',
  },
});

class Series extends Component {
  componentDidMount() {
    this.props.dispatch(getSeries());
  }

  updateSearch = (name, value) => {
    this.props.dispatch(updateMoviesSearch({name: name, value: value}));
  };

  render() {
    const {category, year} = this.props.search;
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        <TopSearchBar
          updateSearchHandler={this.updateSearch}
          selectedYear={year}
          selectedCategory={category}
        />
        <Loading loader={this.props.series.loader}>
          <ListMovies items={this.props.series.items} />
        </Loading>
      </View>
    );
  }
}

const mapPropsToState = state => {
  return {
    series: state.series,
    search: state.search.series,
  };
};

export default connect(mapPropsToState)(Series);
