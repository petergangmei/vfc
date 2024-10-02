
import { combineSlices } from '@reduxjs/toolkit';
// import articleSlice from './articleSlice';
import apiSlice from './apiSlice';

const rootReducer = combineSlices({
    apiSlice:apiSlice,
});

export default rootReducer;