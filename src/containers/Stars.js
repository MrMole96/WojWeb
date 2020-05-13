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
import {Loading} from '../components/Loading';
import { withDownloadUpdate } from '../hoc/withDownloadUpdate';

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
  render() {
    const {query} = this.props.search;
    return (
      <View style={styles.container}>
        <Header
          navigation={this.props.navigation}
          title={this.props.route.params.title}
        />
        <TopSearchBar
          isStar
          updateSearchHandler={this.props.updateSearchHandler}
          query={this.props.searchData.query}
        />
        <Loading loader={this.props.loader}>
          <ListMovies items={this.props.items} />
        </Loading>
      </View>
    );
  }
}

export default withDownloadUpdate(Stars);
