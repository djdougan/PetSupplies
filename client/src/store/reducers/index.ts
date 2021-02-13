// import { createSlice } from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import productsReducer from './productsReducer';
import typeReducer from './typeReducer';
import brandReducer from './brandReducer';

const reducers = combineReducers({
  productsReducer,
  typeReducer,
  brandReducer,
})  
export default reducers;

export type RootState = ReturnType<typeof reducers>;

