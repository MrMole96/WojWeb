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
export const AppText = props => {
  return (
    <Text
      numberOfLines={props.numberOfLines}
      style={{  ...props.style }}>
      {props.children}
    </Text>
  );
};
