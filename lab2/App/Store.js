'use strict'
import { createStore } from 'redux'
import allReducers from './reducers';

// Data for entire application
const store = createStore(allReducers);
