// articleSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  articles: {},
  loading: false,
  error: null,
};

// Create the slice
const articleSlice = createSlice({
  name: 'articleSlice',
  initialState,        
  reducers: {
    setArticle(state, action) {
      state.articles = action.payload;
    },
    setError(state, action) {
        state.articles = action.payload;
      },

    setLoading(state, action) {
        state.articles = action.payload;
      },
  },
});

// Export actions for use in components
export const {
  setArticle,
  setError,
  setLoading,
} = articleSlice.actions;

// Export the reducer to be included in the store
export default articleSlice.reducer;
