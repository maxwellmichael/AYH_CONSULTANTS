import {combineReducers} from 'redux';
import loaderReducer from './reducers/loader.reducer';


const rootReducer = combineReducers(
    {
        loader: loaderReducer,
    }
);


export default rootReducer;