const initialState = {
  trending: {
    items: [],
    loader: false,
  },
  movies:{
    items: [],
    loader: false,
  },
  search: {
    listTitle: 'Trending',
    category: 23,
    year: new Date().getFullYear(),
    mediaType: 'movie',
  }
};

export default initialState;
