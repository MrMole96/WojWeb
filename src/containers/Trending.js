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
import {MediaTypeButtonGroup} from '../components/MediaTypeButtonGroup';
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

class Trending extends Component {
  render() {
    console.log('TRENDING');
    return (
      <View style={styles.container}>
        <Header
          navigation={this.props.navigation}
          title={this.props.route.params.title}
        />
        <MediaTypeButtonGroup />
        <Loading loader={this.props.loader}>
          <ListMovies items={this.props.items} />
        </Loading>
      </View>
    );
  }
}

export default withDownloadUpdate(Trending);
