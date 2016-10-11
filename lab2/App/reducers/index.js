'use strict'

import { combineReducers } from 'redux';
import UserReducer from './reducer-users';

// Combine all reducers into one main object for store
const allReducers = combineReducers({
  users: UserReducer,
});

export default allReducers;
