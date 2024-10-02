// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../features/slices/index';

const store = configureStore({
 reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development', // Enable Redux DevTools only in development mode.
});

export default store;
