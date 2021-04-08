import React, {useState} from 'react';
import {ButtonGroup} from 'react-native-elements';
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
import {useDispatch, useSelector} from 'react-redux';
import {updateMediaType} from '../redux/actions/search';
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#A8DADC',
  },
  selectedButton: {
    backgroundColor: '#1D3557',
  },
  selectedText: {
    color: '#fff',
  },
  button: {
    height: 50,
    backgroundColor: '#A8DADC',
  },
  text: {
    fontSize: 20,

    fontWeight: 'bold',
    color: '#000',
  },
});

export const MediaTypeButtonGroup = () => {
  const [index, setIndex] = useState(1);
  const mediaType = useSelector(state => state.search.trending.mediaType);
  const dispatch = useDispatch();
  const buttons = ['Film', 'Serial', 'Gwiazda'];
  const mediaTypeArray = ['movie', 'tv', 'person'];
  const updateIndex = index => {
    setIndex(index);
    dispatch(updateMediaType(mediaTypeArray[index]));
  };
  return (
    <ButtonGroup
      selectedButtonStyle={styles.selectedButton}
      selectedTextStyle={styles.selectedText}
      buttonStyle={styles.button}
      onPress={index => updateIndex(index)}
      selectedIndex={mediaTypeArray.indexOf(mediaType)}
      buttons={buttons}
      containerStyle={styles.container}
      textStyle={styles.text}
    />
  );
};
