// import { createSlice } from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import productsReducer from './productsReducer';
import typesReducer from './typesReducer';
import typeReducer from './typeReducer';
import brandReducer from './brandReducer';

const reducers = combineReducers({
  productsReducer,
  typesReducer,
  typeReducer,
  brandReducer,
});  
export default reducers;

export type RootState = ReturnType<typeof reducers>;

