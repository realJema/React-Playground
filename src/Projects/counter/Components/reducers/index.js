import { combineReducers } from 'redux';
import postReducer from './postReducer';

/* 
these are the variable names in the state 
this.state.posts  -- goes with -- postReducer 
*/
export default combineReducers({
    posts: postReducer
})
