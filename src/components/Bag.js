import React from 'react';
import {Icon} from 'react-native-elements';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height:
      Dimensions.get('window').height - Dimensions.get('window').height * 0.035,
    width: 100,
    position: 'absolute',
    zIndex: 99999,
    top: 0,
    right: 0,
    backgroundColor: '#111',
    opacity: 0.7,
    paddingTop: 60,
    // borderWidth:1,
    // borderColor:'red'
  },
});

export const Bag = ({isOpen}) => {
  return <View style={styles.container} />;
};
