import React from 'react';
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
import { MovieItem } from './MovieItem';
import { MediaTypeButtonGroup } from './MediaTypeButtonGroup';

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export const ListMovies = ({ items }) => {
  return (
    <FlatList
      // ListHeaderComponent={<MediaTypeButtonGroup />}
      // ListHeaderComponentStyle={{display:'flex',alignSelf: 'stretch',}}
      contentContainerStyle={styles.list}
      data={items}
      numColumns={2}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }, index) => {
        return (
          <MovieItem
            key={Date.now() + index}
            title={item.name}
            popularity={item.popularity}
            voteAverage={item.vote_average}
            voteCount={item.vote_count}
            overview={item.overview}
            posterPath={item.poster_path}
            known_for={item.known_for}
          />
        );
      }}
    />
  );
};
