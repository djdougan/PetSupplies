import { TypeAction } from './../actions/typeActions';
import { createSlice } from '@reduxjs/toolkit';

const TypeSlice = createSlice({
  name: 'Type',
  initialState: [],
  reducers: {
    SearchTypeRepoAction(state, action) {
      console.log(state, action.payload);
    },
    GetTypeByIdAction(state, action) {
      console.log(state, action.payload);
    },
    CreateTypeAction(state, action) {
      console.log(state, action.payload);
    },
    UpdateTypeAction(state, action) {
      console.log(state, action.payload);
    },
    DeleteTypeAction(state, action) {
      console.log(state, action.payload);
    },
    SearchTypeSuccessAction(state, action) {
      console.log(state, action.payload);
    },
    SearchTypeErrorAction(state, action) {
      console.log(state, action.payload);
    },
  },
});
export const {
  SearchTypeRepoAction,
  GetTypeByIdAction,
  CreateTypeAction,
  UpdateTypeAction,
  DeleteTypeAction,
  SearchTypeSuccessAction,
  SearchTypeErrorAction,
} = TypeSlice.actions;
const reducer = TypeSlice.reducer;
export default reducer;
