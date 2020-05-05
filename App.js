import React, {Component} from 'react';
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
} from 'react-native';
import {MovieItem} from './src/components/MovieItem';
import TopSearchBar from './src/components/TopSearchBar';
import {Header} from './src/components/Header';
import {TextInput} from 'react-native';
import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {getMovies} from './src/redux/actions/movies';
import {connect} from 'react-redux';
import {ListMovies} from './src/components/ListMovies';
import { Button } from 'native-base';

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#1D3557',
  },
});

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getMovies());
  }

  render() {
    return (
      <View style={styles.body}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            <TopSearchBar />
            {!this.props.movies.loader && (
              <ListMovies items={this.props.movies.items} />
            )}
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}
const mapPropsToState = state => {
  return {movies: state.movies};
};

export default connect(mapPropsToState)(App);
