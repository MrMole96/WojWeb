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
import { Icon } from 'react-native-elements';
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
    padding: 15,
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
    width: 188,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 200,
  },
});

export const ItemDetails = props => {
  var fullPath = 'http://image.tmdb.org/t/p/w500' + props.posterPath;
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.visible}
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
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 10,
              top: 10,
            }}>
            <Icon
              name="close"
              onPress={() => {
                props.visibilityHandler(!props.visible);
              }}
            />
          </TouchableOpacity>
          <Text style={styles.modalText}>Hello World!</Text>
          <TouchableHighlight
            style={{ ...styles.openButton, backgroundColor: '#2196F3' }}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};
