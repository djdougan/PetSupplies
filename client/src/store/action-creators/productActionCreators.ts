import { ProductActionTypes } from '../action-types/productActionsTypes';
import { ProductActions } from '../actions/productActions';
import axios from'axios';
import { Dispatch } from 'redux';




export const getProducts = (term: string) =>{

    return async (dispatch: Dispatch<ProductActions>) => {
        dispatch({
          type: ProductActionTypes.SEARCH_REPOSITORIES,   
        });

      try {
        const { data } = await axios.get('https://localhost:44390/', {
          params: {
            text: term,
          },
        });
        const results = data.objects.map((result: any) => {
          return result;
        });
        dispatch({
          type: ProductActionTypes.SEARCH_REPOSITORIES_SUCCESS,
          payload: results,
        });
      } catch (error) {
        dispatch({
          type: ProductActionTypes.SEARCH_REPOSITORIES_ERROR,
          payload: error.message,
        });
      }
    };
}





