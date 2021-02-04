import { IProduct } from './../Interfaces/IProduct';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import axios from'axios';
import { Dispatch } from 'redux';



export const searchRepositories = (term: string) =>{

    return async (dispatch: Dispatch<Action>) => {
        dispatch({
          type: ActionType.SEARCH_REPOSITORIES,   
        });
      try {

       let {data} = await axios.get(
          'https://localhost:5001/products/',
          {
            params: {
              name: term,
            },
          }
        );

        const products = data.objects.map((result: any) => {
          return result;
        });
        
        dispatch({
          type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
          payload: products
        });
      } catch (error) {
        dispatch({
          type: ActionType.SEARCH_REPOSITORIES_ERROR,
          payload: error.message,
        });
      }
    };
}






