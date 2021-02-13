import { useActions } from '../../hooks/useActions';
import { ProductActionType } from '../action-types';
import {ProductAction } from '../actions';
import {  IProduct } from '../Interfaces';


export interface ProductRepoState {
  data:[],
  loading: boolean;
  error: string | null;
}

const initialState: ProductRepoState = {
  data: [],
  loading: false,
  error: null,
}


const productReducer = (state = initialState, action: ProductAction): ProductRepoState => {
  switch (action.type) {
    case ProductActionType.GET_PRODUCT_BY_ID: {
      return { 
        loading: true,
        error: null, data: []
      };
    }
    case ProductActionType.CREATE_PRODUCT: {
      return {  loading: false, error: null, data: [] };
    }
    case ProductActionType.GET_ALL_PRODUCTS: {
      return {  loading: true, error: null, data: [] };
    }
    case ProductActionType.PRODUCT_SUCCESS: {
      return {  loading: false, error: null, data: action.payload };
    }
    case ProductActionType.PRODUCT_ERROR: {
      return {  loading: false, error: action.payload, data: [] };
    }
    default:
      return state;
  }
};

export default productReducer;
