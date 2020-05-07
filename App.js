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
import  Movies  from './src/containers/Movies';

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
          <Drawer.Navigator initialRouteName="Trending">
            <Drawer.Screen
              name="Trending"
              component={Trending}
              options={{title: 'Trending'}}
            />
            <Drawer.Screen
              name="Movies"
              component={Movies}
              options={{title: 'Movies'}}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}

export default App;
