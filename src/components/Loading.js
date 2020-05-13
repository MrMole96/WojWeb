import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D3557',
  },
  loaderDiv: {
    flex: 1,
    justifyContent: 'center',
  },
});

export const Loading = ({loader, children}) => {
  return (
    <React.Fragment>
      {loader ? (
        <View style={styles.loaderDiv}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        {...children}
      )}
    </React.Fragment>
  );
};
