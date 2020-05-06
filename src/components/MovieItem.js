import React, {useEffect} from 'react';
import {Icon} from 'react-native-elements';
import axios from 'axios';
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
import {AppText} from './AppText';
export const MovieItem = ({
  title,
  popularity,
  voteAverage,
  voteCount,
  overview,
  posterPath,
}) => {
  //http://image.tmdb.org/t/p/w185/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg
  // useEffect(() => {
  //   var poster = axios
  //     .get('http://image.tmdb.org/t/p/w185/' + posterPath)
  //     .then(x => console.log('x', x));
  //   console.log('poster', poster);
  // }, []);
  var fullPath = 'http://image.tmdb.org/t/p/w500' + posterPath;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: fullPath}}
        resizeMode="stretch"
      />
      <AppText style={styles.title}>{title}</AppText>
      <View style={styles.details}>
        <View style={styles.detailItem}>
          <Icon name="fire" type="material-community" size={18} />
          <AppText>{popularity}</AppText>
        </View>
        <View style={styles.detailItem}>
          <Icon name="star" size={18} />
          <AppText>{voteAverage}</AppText>
        </View>
        <View style={styles.detailItem}>
          <Icon name="plus" type="font-awesome" size={15} />
          <AppText>{voteCount}</AppText>
        </View>
      </View>

      {/* duration */}
      {/* gatunek */}
      {/* duration */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: 190,
    height: 290,
    paddingBottom: 10,
    margin: 5,
    borderColor: '#000',
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: '#A8DADC',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 5,
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  detailItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  image: {
    width: 188,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 210,
  },
});
