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
import {updateMoviesSearch} from '../redux/actions/search';
import {Loading} from '../components/Loading';
import {withDownloadUpdate} from '../hoc/withDownloadUpdate';

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

class Movies extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          navigation={this.props.navigation}
          title={this.props.route.params.title}
        />
        <TopSearchBar
          updateSearchHandler={this.props.updateSearchHandler}
          selectedYear={this.props.search.movies.year}
          selectedCategory={this.props.search.movies.category}
        />
        <Loading loader={this.props.movies.loader}>
          <ListMovies items={this.props.movies.items} />
        </Loading>
      </View>
    );
  }
}

const mapPropsToState = ({movies, search}) => {
  return {movies, search};
};

export default connect(mapPropsToState)(
  withDownloadUpdate(Movies, getMovies, updateMoviesSearch),
);
