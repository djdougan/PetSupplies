import { IProductBrand } from '../Interfaces/IProductBrand';
import { BrandActionType } from '../action-types';

export interface SearchBrandRepoAction {
  type: BrandActionType.GET_ALL_BRAND;
}
export interface GetBrandByIdAction {
  type: BrandActionType.GET_BRAND_BY_ID;
}
export interface CreateBrandAction {
  type: BrandActionType.CREATE_BRAND;
}
export interface UpdateBrandAction {
  type: BrandActionType.UPDATE_BRAND;
}

export interface DeleteBrandsAction {
  type: BrandActionType.DELETE_BRAND;
}
export interface SearchBrandSuccessAction {
  type: BrandActionType.BRAND_SUCCESS;
  payload: [];
}
export interface SearchBrandErrorAction {
  type: BrandActionType.BRAND_ERROR;
  payload: string;
}

export type BrandAction =
  | DeleteBrandsAction
  | GetBrandByIdAction
  | CreateBrandAction
  | SearchBrandRepoAction
  | SearchBrandSuccessAction
  | SearchBrandErrorAction;
