'use strict'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Test from './components/Test'
import allReducers from './reducers'

// Data for entire application
export default createStore(allReducers);
