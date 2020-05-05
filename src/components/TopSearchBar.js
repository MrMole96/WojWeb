import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  List,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {connect} from 'react-redux';
import {getCategories} from '../redux/actions/categories';
import axios from 'axios';
const styles = StyleSheet.create({
  headerPickers: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pickerCategory: {
    width: 150,
    height: 50,
    backgroundColor: '#A8DADC',
    borderRadius: 25,
    borderColor: '#000',
    borderWidth: 1,
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
      this.setState({categories: items});
    });
  }

  state = {
    categories: [],
    selectedCategory: '',
    selectedYear: '',
  };

  setCategory = category => {
    this.setState({selectedCategory: category});
  };

  setYear = year => {
    this.setState({selectedYear: year});
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
          selectedValue={this.state.selectedCategory}
          style={styles.pickerCategory}
          onValueChange={itemValue => this.setCategory(itemValue)}>
          {categories}
        </Picker>
        {/* Stworzyc do tego nowy komponent */}
        <Picker
          mode="dropdown"
          selectedValue={this.state.selectedYear}
          onValueChange={itemValue => this.setYear(itemValue)}
          style={styles.pickerYear}>
          {this.years()}
        </Picker>
      </View>
    );
  }
}
function mapPropsToState(state) {
  return {
    categories: state.categories,
  };
}
export default connect(mapPropsToState)(TopSearchBar);
