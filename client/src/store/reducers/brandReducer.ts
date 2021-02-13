// import { IProductBrand } from './../Interfaces/IProductBrand';
import { BrandAction } from './../actions/brandActions';
import { BrandActionType } from '../action-types';

export interface BrandRepoState {
  data: [];
  loading: boolean;
  error: string | null;
}

const initialState: BrandRepoState = {
  data: [],
  loading: false,
  error: null,
};

const brandReducer = (state=  initialState, action :BrandAction): 
BrandRepoState => {
  switch (action.type) {
    case BrandActionType.GET_ALL_BRAND: {
      return { loading: true, error: null, data: [] };
    }
    case BrandActionType.GET_BRAND_BY_ID: {
      return { loading: true, error: null, data: [] };
    }
    case BrandActionType.CREATE_BRAND: {
      return { loading: false, error: null, data: [] };
    }
    // case BrandActionType.UPDATE_BRAND: {
    //   return { loading: false, error: null, data: [] };
    // }
    case BrandActionType.DELETE_BRAND: {
      return { loading: false, error: null, data: [] };
    }
    case BrandActionType.BRAND_SUCCESS: {
      return { loading: false, error: null, data: action.payload };
    }
    case BrandActionType.BRAND_ERROR: {
      return { loading: false, error: action.payload, data: [] };
    }
    default:
      return state;
  }
};

export default brandReducer;
