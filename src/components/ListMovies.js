import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  List,
  Text,
  Picker,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {MovieItem} from './MovieItem';
import {MediaTypeButtonGroup} from './MediaTypeButtonGroup';
import {ItemDetails} from './ItemDetails';

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export const ListMovies = ({items}) => {
  const [visible, setVisible] = useState(false);
  return (
    <React.Fragment>
      <FlatList
        contentContainerStyle={styles.list}
        data={items}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}, index) => (
          <TouchableOpacity onPress={() => setVisible(!visible)}>
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
          </TouchableOpacity>
        )}
      />
      <ItemDetails visible={visible} />
    </React.Fragment>
  );
};
