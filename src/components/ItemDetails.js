import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
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
} from 'react-native';
import {Icon} from 'react-native-elements';
import { useSelector } from 'react-redux';
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    height: 400,
    width: 300,
    position: 'relative',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 0,
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
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  image: {
    width: 220,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 240,
  },
});

export const ItemDetails = ({item, visible, visibilityHandler}, ...props) => {
  console.log('item', item);
  let categories = useSelector(state => state.search.categories);
  if(item)
  var fullPath = 'http://image.tmdb.org/t/p/w500' + item.poster_path;
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
            source={{uri: fullPath}}
            resizeMode="stretch"
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 10,
              top: 10,
            }}>
            <Icon
              name="close"
              onPress={() => {
                visibilityHandler(!visible);
              }}
            />
          </TouchableOpacity>
          <Text style={styles.modalText}>Hello Wordld!</Text>
          <TouchableHighlight
            style={{...styles.openButton, backgroundColor: '#2196F3'}}>
            <Text style={styles.textStyle}>Dodaj do schowka</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};
