import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    apiRequestStart(state) {
      state.loading = true;
      state.error = null;
    },
    apiRequestSuccess(state, action) {
      state.data = action.payload;
      state.loading = false;
    },
    apiRequestFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { apiRequestStart, apiRequestSuccess, apiRequestFailure } = apiSlice.actions;

export default apiSlice.reducer;