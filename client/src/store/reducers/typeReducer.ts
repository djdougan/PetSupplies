
import { TypeAction } from '../actions/typeActions';
import { TypeActionType } from '../action-types';
import {IProductType} from '../Interfaces/IProductType';


const initialState: TypeRepoState = {
  type: {id: 0, name:''},
  isloading: false,
  err: null,
};

export interface TypeRepoState {
  type: IProductType|null;
  isloading: boolean;
  err: string | null;
}
const typeReducer = (
  state = initialState,
  action: TypeAction
): TypeRepoState => {
  switch (action.type) {
    case TypeActionType.GET_TYPE_BY_ID: {
      return { isloading: true, err: null, type: null };
    }
    case TypeActionType.CREATE_TYPE: {
      return { isloading: false, err: null, type: null };
    }
    case TypeActionType.UPDATE_TYPE: {
      return { isloading: false, err: null, type: null };
    }
    case TypeActionType.DELETE_TYPE: {
      return { isloading: false, err: null, type: null };
    }
    case TypeActionType.GET_TYPE_BY_ID_SUCCESS: {
      return { isloading: false, err: null, type: action.payload };
    }
    case TypeActionType.GET_ALL_TYPE_ERROR: {
      return { isloading: false, err: action.payload, type: null };
    }
    default:
      return state;
  }
};

export default typeReducer;
