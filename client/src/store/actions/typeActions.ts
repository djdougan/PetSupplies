import { IProductType } from '../Interfaces/IProductType';
import { TypeActionType } from '../action-types';

export interface SearchTypeRepoAction {
  type: TypeActionType.GET_ALL_TYPE;
}

export interface GetTypeByIdAction {
  type: TypeActionType.GET_TYPE_BY_ID;
}
export interface CreateTypeAction {
  type: TypeActionType.CREATE_TYPE;
}
export interface UpdateTypeAction {
  type: TypeActionType.UPDATE_TYPE;
}
export interface DeleteTypeAction {
  type: TypeActionType.DELETE_TYPE;
}
export interface SearchTypeRepoSuccessAction {
  type: TypeActionType.TYPE_SUCCESS;
  payload: [];
}
export interface GetByTypeIdRepoSuccessAction {
  type: TypeActionType.GET_TYPE_BY_ID_SUCCESS;
  payload: IProductType;
}
export interface SearchTypeRepoErrorAction {
  type: TypeActionType.GET_ALL_TYPE_ERROR;
  payload: string;
}

export type TypeAction =
  | SearchTypeRepoAction
  | GetTypeByIdAction
  | UpdateTypeAction
  | CreateTypeAction
  | DeleteTypeAction
  | SearchTypeRepoSuccessAction
  | SearchTypeRepoErrorAction
  | GetByTypeIdRepoSuccessAction;
