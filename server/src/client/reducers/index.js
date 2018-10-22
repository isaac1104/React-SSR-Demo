import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import authReducer from './auth_reducer';

const rootReducer = combineReducers({
  users: usersReducer,
  auth: authReducer
});

export default rootReducer;
