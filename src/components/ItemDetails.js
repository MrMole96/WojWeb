import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Animated,
  View,
  List,
  Text,
  Modal,
  Picker,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import { Easing } from 'react-native-reanimated';
import { Icon } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { AppText } from './AppText';
import { addItemBagHandler } from '../redux/actions/bag';
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    height:
      Dimensions.get('window').height - Dimensions.get('window').height * 0.15,
    width:
      Dimensions.get('window').width - Dimensions.get('window').width * 0.23,
    position: 'relative',
    backgroundColor: '#A8DADC',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  title: {
    marginBottom: 5,
    textAlign: 'center',
    fontSize: 20,
    marginHorizontal: 9,
  },
  overview: {
    marginHorizontal: 16,
    flex: 1,
  },
  image: {
    flex: 6,
    marginTop: -1,
    width: '100%',
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
  },
  categories: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 9,
  },
  categoryItem: {
    flexBasis: '45%',
    textAlign: 'center',
    color: 'white',
    borderRadius: 25,
    backgroundColor: '#1D3557',
    fontSize: 15,
    margin: 2,
  },
  closeIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
    borderRadius: 50,
    backgroundColor: 'red',
    color: 'white',
  },
});

export const ItemDetails = ({ item, visible, visibilityHandler }, ...props) => {
  const dispatch = useDispatch();
  const [x, setX] = useState(new Animated.Value(0));
  let categories = useSelector(state => state.search.categories);
  var fullPath;
  var movieGenres = [];
  if (item) {
    fullPath = 'http://image.tmdb.org/t/p/w500' + item.poster_path;
    movieGenres = categories.items.filter(x => item.genre_ids.includes(x.id));
  }

  function onClickTest() {
    Animated.timing(x, {
      duration: 1000,
      toValue: 1,
      useNativeDriver: false,
    }).start();
  }

  var backgroundColor = x.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgb(255,99,71)", "rgb(99,71,255)"],
  });

  var animatebackGroundColor = {
    backgroundColor: backgroundColor,
  };
  console.log('aaaa')
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        alert('Modal has been closed.');
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image
            style={styles.image}
            source={{ uri: fullPath }}
            resizeMode="stretch"
          />
          <TouchableOpacity style={styles.closeIcon}>
            <Icon
              name="close"
              onPress={() => {
                visibilityHandler(!visible);
              }}
            />
          </TouchableOpacity>
          <View>
            <AppText style={styles.title}>{item.name}</AppText>
          </View>
          <ScrollView style={styles.overview} persistentScrollbar={true}>
            <AppText style={{ fontSize: 15 }}>{item.overview}</AppText>
          </ScrollView>
          <View style={styles.categories}>
            {/* <AppText>Gatunki</AppText> */}
            <FlatList
              contentContainerStyle={{ flex: 1, justifyContent: 'center' }}
              listKey={Date.now()}
              data={movieGenres}
              numColumns={2}
              renderItem={({ item }) => (
                <AppText
                  style={styles.categoryItem}
                  key={item.id}
                  numberOfLines={2}>
                  {item.name}
                </AppText>
              )}
              keyExtractor={item => item.id.toString()}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              dispatch(addItemBagHandler(item));
              onClickTest();
            }}>
            <Animated.View
              style={{ ...styles.openButton, ...animatebackGroundColor }}>
              <AppText style={styles.textStyle}>Dodaj do schowka</AppText>
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
