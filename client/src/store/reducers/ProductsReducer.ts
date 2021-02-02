import { ProductActionTypes } from '../action-types/productActionsTypes';
import { IProduct } from '../Interfaces/IProduct';
import { Reducer } from 'redux';
import { ProductActions } from '../actions/productActions';


export interface IProductsState {
  readonly currentProduct: IProduct | null;
  readonly products: IProduct[];
  readonly loading: boolean;
  error: string|null;
}

const initialProductState: IProductsState = {
  currentProduct: null,
  products: [],
  loading: false,
  error: null
};
export const productsReducer: Reducer<IProductsState, ProductActions> = (
  state = initialProductState,
  action: ProductActions    
): IProductsState => {
  switch (action.type) {
    case ProductActionTypes.LOADING: {
      return {...state, loading: true };
    }
    case ProductActionTypes.GET_PRODUCTS: {

      return { currentProduct:null, loading: true, error: null, products: action.payload };
    }
    case ProductActionTypes.GET_PRODUCT: {
      return {
        ...state,
        currentProduct: action.payload,
        loading: false,
      };
    }
    case ProductActionTypes.UPDATE_PRODUCT: {
      return {
        ...state,
        loading: false,
      };
    }
    case ProductActionTypes.DELETE_PRODUCT: {
      return {
        ...state,
        loading: false,
      };
    }
    case ProductActionTypes.SEARCH_REPOSITORIES_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case ProductActionTypes.SEARCH_REPOSITORIES_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
  }

  return state;
};
