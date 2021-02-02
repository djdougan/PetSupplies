import { IProduct } from './../Interfaces/IProduct';
import { ProductActionTypes }  from '../action-types/productActionsTypes';



export interface IProductLoading {
  type: ProductActionTypes.LOADING;
  payload: "loading...";
}
export interface IProductsGetAllAction {
  type: ProductActionTypes.GET_PRODUCTS;
  payload: IProduct[];  
}
export interface IProductGetById {
  type: ProductActionTypes.GET_PRODUCT;
  payload: IProduct;
}
export interface IProductUpdate {
  type: ProductActionTypes.UPDATE_PRODUCT;
  payload: IProduct;
}
export interface IProductDelete {
  type: ProductActionTypes.DELETE_PRODUCT;
}
 
export interface SearchRepositoriesAction {
   type: ProductActionTypes.SEARCH_REPOSITORIES;
 }
export interface SearchProductSuccessAction {
  type: ProductActionTypes.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}
export interface SearchProductErrorAction {
  type: ProductActionTypes.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type ProductActions =
  | IProductLoading
  | IProductsGetAllAction
  | IProductGetById
  | IProductUpdate
  | SearchRepositoriesAction
  | SearchProductSuccessAction
  | SearchProductErrorAction; 
