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
        const { data } = await axios.get(
          'https://localhost:44390/products/',
          {
            params: {
              text: term,
            },
          }
        );
        const results = data.objects.map((result: any) => {
          return result;
        });
        dispatch({
          type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
          payload: results,
        });
      } catch (error) {
        dispatch({
          type: ActionType.SEARCH_REPOSITORIES_ERROR,
          payload: error.message,
        });
      }
    };
}





