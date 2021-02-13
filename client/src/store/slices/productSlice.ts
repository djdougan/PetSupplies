import { ProductAction } from './../actions/productActions';
import { createSlice } from '@reduxjs/toolkit'

const ProductSlice = createSlice({
  name: 'product',
  initialState: [],
  reducers: {
    SearchProductRepoAction(state, action) {
      console.log(state, action.payload);
    },
    GetProductByIdAction(state, action) {
      console.log(state, action.payload);
    },
    CreateProductAction(state, action) {
      console.log(state, action.payload);
    },
    UpdateProductAction(state, action) {
      console.log(state, action.payload);
    },
    DeleteProductAction(state, action) {
      console.log(state, action.payload);
    },
    SearchProductSuccessAction(state, action) {
      console.log(state, action.payload);
    },
    SearchProductErrorAction(state, action) {
      console.log(state, action.payload);
    },
  },
});
export const {
  SearchProductRepoAction,
  GetProductByIdAction,
  CreateProductAction,
  UpdateProductAction,
  DeleteProductAction,
  SearchProductSuccessAction,
  SearchProductErrorAction,
} = ProductSlice.actions
const reducer = ProductSlice.reducer
export default reducer