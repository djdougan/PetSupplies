import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

export const store = createStore(reducers, {}, applyMiddleware(thunk));
store.subscribe(()=>{
    console.warn("Store was changed", store.getState())});
