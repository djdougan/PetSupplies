import {combineReducers} from 'redux';
import {productsReducer} from './ProductsReducer';

const reducers =  combineReducers({
    repositories: productsReducer,
});
export default reducers;

export type RootState = ReturnType<typeof reducers>;
