import { combineReducers } from 'redux';
import blogReducer from './blogReducer';
import authReducer from './authReducer';

export default combineReducers({
  blogs: blogReducer,
  auth: authReducer,
});