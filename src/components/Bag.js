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
} from 'react-native';
import {Easing} from 'react-native-reanimated';

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
    opacity: 0.7,
    paddingTop: 60,
    // borderWidth:1,
    // borderColor:'red'
  },
});

export default class Bag extends Component {
  state = {
    visible: false,
    x: new Animated.Value(200),
  };

  slide = () => {
    console.log('SLIDES');
    Animated.spring(this.state.x, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true, // Add This line
    }).start();
    this.setState({
      visible: true,
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      this.slide();
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
          {/* your content, such as this.props.children */}
        </Animated.View>
     
    );
  }
}
