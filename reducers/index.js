import { combineReducers } from 'redux';
import auth from './auth_reducer';
import camps from './camp_reducer'

export default combineReducers({
  auth, camps
});
