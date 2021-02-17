
import { TypeAction } from '../actions/typeActions';
import { TypeActionType } from '../action-types';
import {IProductType} from '../Interfaces/IProductType';


const initialState: TypesRepoState = {
  data: [],
  loading: false,
  error: null,
};
export interface TypesRepoState {
  data: IProductType[];
  loading: boolean;
  error: string | null;
}

export interface TypeRepoState {
  type: IProductType;
  loading: boolean;
  error: string | null;
}
const typesReducer = (
  state = initialState,
  action: TypeAction
): TypesRepoState => {
  switch (action.type) {
    case TypeActionType.GET_ALL_TYPE: {
      return { loading: true, error: null, data: []};
    }
    case TypeActionType.TYPE_SUCCESS: {
      return { loading: false, error: null, data: action.payload};
    }

    case TypeActionType.GET_ALL_TYPE_ERROR: {
      return { loading: false, error: action.payload, data: []};
    }
    default:
      return state;
  }
};

export default typesReducer;
