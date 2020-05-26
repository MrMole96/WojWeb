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
import {useSelector} from 'react-redux';
import {AppText} from './AppText';
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    height: 500,
    width: 300,
    position: 'relative',
    backgroundColor: '#A8DADC',
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
    fontSize: 18,
  },
  title: {
    marginBottom: 5,
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 9,
  },
  overview: {
    marginHorizontal: 16,
    flex: 1,
  },
  image: {
    width: 220,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 240,
  },
  categories: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'red',
    // borderWidth: 2,
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

export const ItemDetails = ({item, visible, visibilityHandler}, ...props) => {
  console.log('item', item);
  let categories = useSelector(state => state.search.categories);
  var fullPath;
  var movieGenres = [];
  if (item) {
    fullPath = 'http://image.tmdb.org/t/p/w500' + item.poster_path;
    movieGenres = categories.items.filter(x => item.genre_ids.includes(x.id));
    console.log(movieGenres);
  }

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
          <ScrollView style={styles.overview}>
            <AppText style={{fontSize: 15}}>{item.overview}</AppText>
          </ScrollView>
          <View style={styles.categories}>
            {/* <AppText>Gatunki</AppText> */}
            <FlatList
              listKey={Date.now()}
              data={movieGenres}
              numColumns={2}
              renderItem={({item}) => (
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
          <TouchableHighlight
            style={{...styles.openButton, backgroundColor: '#2196F3'}}>
            <AppText style={styles.textStyle}>Dodaj do schowka</AppText>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};
