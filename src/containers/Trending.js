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
import {getTrending} from '../redux/actions/trending';
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
    this.props.dispatch(getTrending());
  }
  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        <MediaTypeButtonGroup />
        {/* <TopSearchBar /> */}
        {this.props.trending.loading ? (
          <View style={styles.loaderDiv}>
            <ActivityIndicator size="large" color="#00ff00" />
          </View>
        ) : (
          <ListMovies items={this.props.trending.items} />
        )}
      </View>
    );
  }
}

const mapPropsToState = state => {
  return {trending: state.trending};
};

export default connect(mapPropsToState)(Trending);
