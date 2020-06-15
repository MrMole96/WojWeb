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
import {AppText} from './AppText';
import {useSelector, useDispatch} from 'react-redux';
import { toggleBagHandler } from '../redux/actions/bag';
export const Header = ({navigation, title}) => {
  const search = useSelector(state => state.search);
  const dispatch = useDispatch();
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Icon name="menu" size={35} />
      </TouchableOpacity>
      <View>
        <AppText style={styles.title}>{title}</AppText>
      </View>
      <TouchableOpacity>
        <Icon name="shopping-basket" type="font-awesome" size={35} onPress={()=>dispatch(toggleBagHandler())} />
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
  title: {
    fontSize: 25,
    textAlign: 'center',
    color: '#F1FAEE',
  },
  subTitle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#F1FAEE',
  },
});
