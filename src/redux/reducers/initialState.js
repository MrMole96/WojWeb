const initialState = {
  trending: {
    items: [],
    loader: false,
  },
  movies: {
    items: [],
    loader: false,
  },
  series: {
    items: [],
    loader: false,
  },
  stars: {
    items: [],
    loader: false,
  },
  search: {
    listTitle: 'trending',
    trending: {
      mediaType: 'movie',
    },
    movies: {
      category: 23,
      year: new Date().getFullYear(),
    },
    series: {
      category: 23,
      year: new Date().getFullYear(),
    },
    stars: {
      query: '',
    },
  },
};

export default initialState;
