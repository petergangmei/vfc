
import { combineSlices } from '@reduxjs/toolkit';
// import articleSlice from './articleSlice';
import apiSlice from './apiSlice';
import articleSlice from './articleSlice';

const rootReducer = combineSlices({
    apiSlice:apiSlice,
    articleSlice: articleSlice,
    // other slice reducers here...
});

export default rootReducer;