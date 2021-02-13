
import { TypeAction } from '../actions/typeActions';
import { TypeActionType } from '../action-types';
import {IProductType} from '../Interfaces/IProductType';


const initialState: TypeRepoState = {
  data: [],
  loading: false,
  error: null,
};

export interface TypeRepoState {
  data: IProductType[];
  loading: boolean;
  error: string | null;
}
const typeReducer = (state = initialState, action: TypeAction): TypeRepoState => {
  switch (action.type) {
    case TypeActionType.GET_ALL_TYPE: {
      return {  loading: true, error: null, data: [] };
    }
    case TypeActionType.GET_TYPE_BY_ID: {
      return {  loading: true, error: null, data: [] };
    }
    case TypeActionType.CREATE_TYPE: {
      return {  loading: false, error: null, data: [] };
    }
    case TypeActionType.UPDATE_TYPE: {
      return {  loading: false, error: null, data: [] };
    }
    case TypeActionType.DELETE_TYPE: {
      return {  loading: false, error: null, data: [] };
    }
    case TypeActionType.TYPE_SUCCESS: {
      return {  loading: false, error: null, data: action.payload };
    }
    case TypeActionType.TYPE_ERROR: {
      return {  loading: false, error: action.payload, data: [] };
    }
    default:
      return state;
  }
};

export default typeReducer;
