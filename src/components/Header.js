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
} from 'react-native';
import { AppText } from './AppText';
export const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Icon name="menu" size={35} />
      </TouchableOpacity>
      <AppText style={styles.text}>WojWeb</AppText>
      <TouchableOpacity>
        <Icon name="shopping-basket" type="font-awesome" size={35} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: '#457B9D',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 23,
    textAlign: 'center',
    color: '#F1FAEE',
  },
});
