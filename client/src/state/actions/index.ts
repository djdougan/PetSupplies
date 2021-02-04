import { IProduct } from './../Interfaces/IProduct';
import { ActionType }  from '../action-types';
 
export interface SearchRepositoriesAction {
   type: ActionType.SEARCH_REPOSITORIES;
 }
export interface SearchProductSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: IProduct[];
}
export interface SearchProductErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SearchRepositoriesAction
  | SearchProductSuccessAction
  | SearchProductErrorAction; 
