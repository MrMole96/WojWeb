import React, {useState, Component} from 'react';
import {Icon} from 'react-native-elements';
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  TouchableHighlight,
  Button,
} from 'react-native';
import {Easing} from 'react-native-reanimated';
import {toggleBagHandler} from '../redux/actions/bag';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
  container: {
    height:
      Dimensions.get('window').height - Dimensions.get('window').height * 0.035,
    width: 200,
    position: 'absolute',
    zIndex: 99999,
    top: 0,
    right: 0,
    backgroundColor: '#111',
    // paddingTop: 60,
    // borderWidth:1,
    // borderColor:'red'
  },
  btnClickContain: {
    flexDirection: 'row',
    backgroundColor: '#009D6E',
    borderRadius: 5,
    padding: 5,
    margin: 5
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnIcon: {
    height: 25,
    width: 25,
  },
  btnText: {
    fontSize: 18,
    color: '#FAFAFA',
    marginLeft: 10,
    marginTop: 2,
  },
});

class Bag extends Component {
  state = {
    visible: false,
    x: new Animated.Value(200),
  };

  slide = isOpen => {
    Animated.spring(this.state.x, {
      toValue: isOpen === false ? 0 : 200,
      duration: 500,
      useNativeDriver: true, // Add This line
    }).start();
    this.setState({
      visible: true,
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      this.slide(this.props.isOpen);
    }
  }

  render() {
    // in practice you wanna toggle this.slide() after some props validation, I hope

    return (
      <Animated.View
        style={[
          styles.container,
          {
            transform: [
              {
                translateX: this.state.x,
              },
            ],
          },
        ]}>
        <TouchableHighlight
          style={styles.btnClickContain}
          onPress={() => this.props.dispatch(toggleBagHandler())}>
          <View style={styles.btnContainer}>
            <Icon
              style={styles.btnIcon}
              name="arrow-left"
              type="font-awesome"
              color="#FFF"
            />
            <Text style={styles.btnText}>Zamknij</Text>
          </View>
        </TouchableHighlight>
      </Animated.View>
    );
  }
}

function mapStateToProps(state) {
  return {bag: state.bag};
}

export default connect()(Bag);
