import { IProductQueryParameters } from './../Interfaces/IProductQueryParameters';
import axios from 'axios';
import { Dispatch } from 'redux';
import { ProductActionType } from '../action-types';
import { ProductAction } from '../actions';
import { IProduct } from '../Interfaces/IProduct';

const querySting = (params: any): string => {
  const urlSearchParams = new URLSearchParams();
  for (const i in params) {
    // if (params[i] !== '' || params[i] !== null || params[i] !== 0) {
      if(params[i]){
      urlSearchParams.append(i, params[i]);
    }
  }

  return '?' + urlSearchParams.toString();
};

export const searchProducts = (queryParams: IProductQueryParameters) => {
  const baseUrl = 'http://localhost:5000/';

  // console.log(querySting(queryParams));
  // console.log("Search Products: ",queryParams);
  return async (dispatch: Dispatch<ProductAction>) => {
    dispatch({
      type: ProductActionType.GET_ALL_PRODUCTS,
    });

    try {
      const url = baseUrl + 'products/' + querySting(queryParams);
      console.log(url);
      const response = await fetch(url,{method:"GET"});
      console.log(response);
      if (!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();

      console.log('PRODUCT', data);

      dispatch({
        type: ProductActionType.PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ProductActionType.PRODUCT_ERROR,
        payload: err.message,
      });
    }
  };
};
export const getProductById = (id: number) => {
  return async (dispatch: Dispatch<ProductAction>) => {
    dispatch({
      type: ProductActionType.GET_PRODUCT_BY_ID,
    });

    try {
      const { data } = await axios.get('https://10.0.0.233:45455/products/', {
        params: {
          id: id,
        },
      });

      const products = data.map((result: any) => {
        return result;
      });

      dispatch({
        type: ProductActionType.PRODUCT_SUCCESS,
        payload: products,
      });
    } catch (err) {
      dispatch({
        type: ProductActionType.PRODUCT_ERROR,
        payload: err.message,
      });
    }
  };
};

export const createProduct = (product: IProduct) => {
  return async (dispatch: Dispatch<ProductAction>) => {
    dispatch({
      type: ProductActionType.CREATE_PRODUCT,
    });

    try {
      const { data } = await axios.post('https://10.0.0.233:45455/products/', {
        params: {
          product: product,
        },
      });

      const products = data.map((result: any) => {
        return result;
      });

      dispatch({
        type: ProductActionType.PRODUCT_SUCCESS,
        payload: products,
      });
    } catch (err) {
      dispatch({
        type: ProductActionType.PRODUCT_ERROR,
        payload: err.message,
      });
    }
  };
};
