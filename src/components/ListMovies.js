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
    flexDirection: 'column',
    alignItems:'center',

  },
});

export const ListMovies = ({items}) => {
  const [visible, setVisible] = useState(false);
  const [clickedItem, setItem] = useState(null);
  return (
    <React.Fragment>
      <FlatList
        contentContainerStyle={styles.list}
        data={items}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              setVisible(!visible);
              setItem(item);
            }}>
            <MovieItem
              key={`movie-${item.id}`}
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
      {clickedItem && (
        <ItemDetails
          item={clickedItem}
          visible={visible}
          visibilityHandler={setVisible}
        />
      )}
    </React.Fragment>
  );
};
