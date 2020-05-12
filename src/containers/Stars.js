import {getStars} from '../redux/actions/stars';
import {updateMoviesSearch} from '../redux/actions/search';
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

class Stars extends Component {
  componentDidMount() {
    this.props.dispatch(getStars());
  }

  updateSearch = (name, value) => {
    this.props.dispatch(updateMoviesSearch({name: name, value: value}));
  };

  render() {
    const {query} = this.props.search;
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        <TopSearchBar
          isStar
          updateSearchHandler={this.updateSearch}
          query={query}
        />
        {this.props.stars.loader ? (
          <View style={styles.loaderDiv}>
            <ActivityIndicator size="large" color="#00ff00" />
          </View>
        ) : (
          <ListMovies items={this.props.stars.items} />
        )}
      </View>
    );
  }
}

const mapPropsToState = state => {
  return {
    stars: state.stars,
    search: state.search.stars,
  };
};

export default connect(mapPropsToState)(Stars);
