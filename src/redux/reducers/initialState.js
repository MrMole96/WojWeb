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
    trending: {
      mediaType: 'movie',
    },
    movies: {
      category: 28,
      year: new Date().getFullYear(),
    },
    series: {
      category: 28,
      year: new Date().getFullYear(),
    },
    stars: {
      query: '',
    },
  },
};

export default initialState;
