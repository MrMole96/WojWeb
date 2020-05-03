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
    <React.Fragment>
      <Text style={{fontFamily: 'Inter-Medium-slnt=0', ...props.style}}>
        {props.children}
      </Text>
    </React.Fragment>
  );
};
