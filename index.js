/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import axios from 'axios';
import API_OBJECT from './API';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { Test } from './src/components/Test';
//EXAMPLE
//https://api.themoviedb.org/3/movie/550?api_key=2d250b9c85394332faa2f005814960ba
axios.defaults.params = {};
axios.defaults.params = {
  api_key: API_OBJECT.key,
  language: API_OBJECT.language,
};
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const Drawer = createDrawerNavigator();

const ReduxApp = () => (
  <Provider store={store}>
    <NavigationContainer initialRouteName="Home">
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={App} />
        <Drawer.Screen name="List" component={Test} />
      </Drawer.Navigator>
    </NavigationContainer>
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
