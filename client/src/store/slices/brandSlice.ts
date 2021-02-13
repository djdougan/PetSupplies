import { BrandAction } from './../actions/brandActions';
import { createSlice } from '@reduxjs/toolkit';

const BrandSlice = createSlice({
  name: 'type',
  initialState: [],
  reducers: {
    SearchBrandRepoAction(state, action) {
      console.log(state, action.payload);
    },
    GetBrandByIdAction(state, action) {
      console.log(state, action.payload);
    },
    CreateBrandAction(state, action) {
      console.log(state, action.payload);
    },
    UpdateBrandAction(state, action) {
      console.log(state, action.payload);
    },
    DeleteBrandAction(state, action) {
      console.log(state, action.payload);
    },
    SearchBrandSuccessAction(state, action) {
      console.log(state, action.payload);
    },
    SearchBrandErrorAction(state, action) {
      console.log(state, action.payload);
    },
  },
});
export const {
  SearchBrandRepoAction,
  GetBrandByIdAction,
  CreateBrandAction,
  UpdateBrandAction,
  DeleteBrandAction,
  SearchBrandSuccessAction,
  SearchBrandErrorAction,
} = BrandSlice.actions;
const reducer = BrandSlice.reducer;
export default reducer;
