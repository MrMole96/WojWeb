import React, {Component} from 'react';
import {ListMovies} from '../components/ListMovies';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  List,
  Text,
  Picker,
  StatusBar,
  FlatList,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import {getMovies} from '../redux/actions/movies';
import {Header} from '../components/Header';
import TopSearchBar from './TopSearchBar';
import { MediaTypeButtonGroup } from '../components/MediaTypeButtonGroup';

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

class Trending extends Component {
  componentDidMount() {
    this.props.dispatch(getMovies());
  }
  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        {/* <TopSearchBar /> */}
        <MediaTypeButtonGroup />
        {this.props.movies.loading ? (
          <View style={styles.loaderDiv}>
            <ActivityIndicator size="large" color="#00ff00" />
          </View>
        ) : (
          <ListMovies items={this.props.movies.items} />
        )}
      </View>
    );
  }
}

const mapPropsToState = state => {
  return {movies: state.movies};
};

export default connect(mapPropsToState)(Trending);
