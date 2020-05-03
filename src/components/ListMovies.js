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
import {MovieItem} from './MovieItem';

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export const ListMovies = ({items}) => {
  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={items}
      numColumns={2}
      renderItem={({item}, index) => {
        return (
          <MovieItem
            key={Date.now() + index}
            title={item.title}
            popularity={item.popularity}
            voteAverage={item.vote_average}
            voteCount={item.vote_count}
            overview={item.overview}
            posterPath={item.poster_path}
          />
        );
      }}
    />
  );
};
