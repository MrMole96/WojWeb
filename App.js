/* eslint-disable react-native/no-inline-styles */
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
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {MovieItem} from './src/components/MovieItem';

import {TextInput} from 'react-native';
import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {getMovies} from './src/redux/actions/trending';
import {connect} from 'react-redux';

import {Button} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Trending from './src/containers/Trending';
import Movies from './src/containers/Movies';
import Series from './src/containers/Series';
import Stars from './src/containers/Stars';
import Bag from './src/components/Bag';

const styles = StyleSheet.create({
  safeAreView: {
    flex: 1,
    backgroundColor: '#1D3557',
  },
  scrollView: {
    flex: 1,
  },
});

const Drawer = createDrawerNavigator();
class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreView}>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Trending"
            drawerType="slide"
            drawerStyle={{
              backgroundColor: '#c6cbef',
              width: 240,
            }}>
            <Drawer.Screen
              name="trending"
              component={Trending}
              options={{title: 'Trending'}}
              initialParams={{title: 'Trending'}}
            />
            <Drawer.Screen
              name="movies"
              component={Movies}
              options={{title: 'Filmy'}}
              initialParams={{title: 'Filmy'}}
            />
            <Drawer.Screen
              name="series"
              component={Series}
              options={{title: 'Seriale'}}
              initialParams={{title: 'Seriale'}}
            />
            <Drawer.Screen
              name="stars"
              component={Stars}
              options={{title: 'Gwiazdy'}}
              initialParams={{title: 'Gwiazdy'}}
            />
          </Drawer.Navigator>
          <Bag isOpen={this.props.bag.isOpen} />
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}

function mapPropsToState(state) {
  return {
    search: state.search,
    bag: state.bag,
  };
}

export default connect(mapPropsToState)(App);
