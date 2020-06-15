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
  bag: {
    isOpen: false,
    items: [],
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
    categories: {
      items: [],
      loader: false
    }
  },
};

export default initialState;
