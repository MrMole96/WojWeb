import React, { Component } from 'react';
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
import { connect } from 'react-redux';
import { updateSearch } from '../redux/actions/search';
import axios from 'axios';
const styles = StyleSheet.create({
  headerPickers: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 5
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
});

class TopSearchBar extends Component {
  componentDidMount() {
    axios.get('genre/movie/list').then(response => {
      let items = response.data.genres;
      this.setState({ categories: items });
    });
  }

  state = {
    categories: [],
  };

  updateSearch = (name, value) => {
    this.props.dispatch(updateSearch({ name: name, value: value }));
  };

  years = () => {
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
  render() {
    var categories = null;
    if (this.state.categories.length) {
      categories = this.state.categories.map((x, index) => (
        <Picker.Item key={Date.now() + index} label={x.name} value={x.id} />
      ));
    }
    return (
      <View style={styles.headerPickers}>
        <Picker
          selectedValue={this.props.search.category}
          style={styles.pickerCategory}            
          onValueChange={itemValue => this.updateSearch('category', itemValue)}>
          {categories}
        </Picker>
        {/* Stworzyc do tego nowy komponent */}
        <Picker
          mode="dropdown"
          selectedValue={this.props.search.year}
          onValueChange={itemValue => this.updateSearch('year', itemValue)}
          style={styles.pickerYear}>
          {this.years()}
        </Picker>
      </View>
    );
  }
}
function mapPropsToState(state) {
  return {
    search: state.search,
  };
}
export default connect(mapPropsToState)(TopSearchBar);
