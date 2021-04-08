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
  ListView,
  FlatList,
  Dimensions,
} from 'react-native';
import {AppText} from './AppText';
export const MovieItem = ({
  title,
  popularity,
  voteAverage,
  voteCount,
  overview,
  posterPath,
  known_for,
}) => {
  var fullPath = 'https://image.tmdb.org/t/p/w500' + posterPath;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: fullPath}}
        resizeMode="stretch"
      />
      <AppText numberOfLines={known_for ? 1 : 2} style={styles.title}>
        {title}
      </AppText>
      <View style={{flex: 1, justifyContent: 'center'}}>
        {!known_for ? (
          <View style={styles.details}>
            <View style={styles.detailItem}>
              <Icon
                name="fire"
                type="material-community"
                size={18}
                color={'#f58142'}
              />
              <AppText>{popularity}</AppText>
            </View>
            <View style={styles.detailItem}>
              <Icon name="star" size={18} color={'#FFD700'} />
              <AppText>{voteAverage}</AppText>
            </View>
            <View style={styles.detailItem}>
              <Icon
                name="plus"
                type="font-awesome"
                size={15}
                color={'#26A65B'}
              />
              <AppText>{voteCount}</AppText>
            </View>
          </View>
        ) : (
          <View style={styles.detailsActor}>
            <FlatList
              listKey={Date.now()}
              data={known_for}
              renderItem={({item}) => (
                <AppText
                  key={item.id}
                  numberOfLines={1}
                  style={styles.known_movies}>{`\u2022 ${item.title}`}</AppText>
              )}
              keyExtractor={item => item.id.toString()}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    width:
      Dimensions.get('window').width - Dimensions.get('window').width * 0.545,
    height:
      Dimensions.get('window').height - Dimensions.get('window').height * 0.515,
    paddingBottom: 10,
    margin: 5,
    borderRadius: 20,
    backgroundColor: '#A8DADC',
  },
  title: {
    paddingTop: 5,
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    fontSize: 18,
    lineHeight: 15,
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  detailsActor: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  detailItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  image: {
    flex: 6,
    marginTop: -1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
  },
});
