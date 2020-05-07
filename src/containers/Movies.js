import React, { Component } from 'react';
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
import { Header } from '../components/Header';
import TopSearchBar from './TopSearchBar';
import { ListMovies } from '../components/ListMovies';
import { connect } from 'react-redux';
import { getMovies } from '../redux/actions/movies';

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

  componentDidMount() {
    this.props.dispatch(getMovies())
  }

  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        <TopSearchBar />
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
  return {
    movies: state.movies,
  };
};

export default connect(mapPropsToState)(Movies);
