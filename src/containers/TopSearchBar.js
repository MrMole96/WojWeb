import React, {Component, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  List,
  Text,
  Picker,
  StatusBar,
  FlatList,
} from 'react-native';
// import {Picker} from '@react-native-community/picker';
import {connect} from 'react-redux';
import {updateMoviesSearch} from '../redux/actions/search';
import axios from 'axios';
import {TextInput} from 'react-native-gesture-handler';
const styles = StyleSheet.create({
  headerPickers: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 5,
  },
  pickerCategory: {
    width: 180,
    height: 50,
    backgroundColor: '#A8DADC',
    marginRight: 5,
  },
  pickerYear: {
    marginLeft: 5,
    width: 100,
    height: 50,
    backgroundColor: '#A8DADC',
    borderRadius: 25,
    borderColor: '#000',
    borderWidth: 1,
  },
  textInput: {
    paddingLeft: 6,
    height: 40,
    width: 200,
    fontSize: 20,
    backgroundColor: '#A8DADC',
    borderBottomWidth: 1,
    borderRadius: 5,
  },
});

export const TopSearchBar = props => {
  let [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('genre/movie/list').then(response => {
      let items = response.data.genres;
      setCategories(items);
    });
  }, [setCategories]);

  const years = () => {
    var currentYear = new Date().getFullYear(),
      years = [];
    var startYear = 1990;
    while (startYear <= currentYear) {
      years.push(startYear++);
    }
    return years
      .reverse()
      .map(x => <Picker.Item label={'' + x} value={x} key={Date.now()} />);
  };

  if (categories.length) {
    categories = categories.map((x, index) => (
      <Picker.Item key={Date.now() + index} label={x.name} value={x.id} />
    ));
  }
  return (
    <View style={styles.headerPickers}>
      {!props.isStar ? (
        <React.Fragment>
          <Picker
            selectedValue={props.selectedCategory}
            style={styles.pickerCategory}
            onValueChange={itemValue =>
              props.updateSearchHandler('category', itemValue)
            }>
            {categories}
          </Picker>
          <Picker
            mode="dropdown"
            selectedValue={props.selectedYear}
            onValueChange={itemValue =>
              props.updateSearchHandler('year', itemValue)
            }
            style={styles.pickerYear}>
            {years()}
          </Picker>
        </React.Fragment>
      ) : (
        <TextInput
          style={styles.textInput}
          placeholder={'Tom hanks...'}
          onChangeText={text => props.updateSearchHandler('query', text)}
          value={props.query}
        />
      )}
    </View>
  );
};
