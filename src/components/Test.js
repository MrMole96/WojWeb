import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Header } from '../components/Header';
import TopSearchBar from '../containers/TopSearchBar';
export const Test = ({ navigation }) => {
  return (
    <View>
      <Header navigation={navigation} />
      <TopSearchBar />
      <Text>sdadasdasdas</Text>
    </View>
  );
};
