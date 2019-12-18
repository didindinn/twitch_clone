import { combineReducer } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducer({
  auth: authReducer,
  form: formReducer
});