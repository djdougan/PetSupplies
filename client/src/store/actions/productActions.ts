import { IProduct } from '../Interfaces/IProduct';
import { ProductActionType } from '../action-types';

export interface SearchProductRepoAction {
  type: ProductActionType.GET_ALL_PRODUCTS;
}
export interface GetProductByIdAction {
  type: ProductActionType.GET_PRODUCT_BY_ID;
}
export interface CreateProductAction {
  type: ProductActionType.CREATE_PRODUCT;
}
export interface UpdateProductAction {
  type: ProductActionType.UPDATE_PRODUCT;
}
export interface DeleteProductAction {
  type: ProductActionType.DELETE_PRODUCT;
}

export interface SearchProductSuccessAction {
  type: ProductActionType.PRODUCT_SUCCESS;
  payload: [];
}
export interface SearchProductErrorAction {
  type: ProductActionType.PRODUCT_ERROR;
  payload: string;
}

export type ProductAction =
  | SearchProductRepoAction
  | GetProductByIdAction
  | CreateProductAction
  | UpdateProductAction
  | DeleteProductAction
  | SearchProductSuccessAction
  | SearchProductErrorAction;
