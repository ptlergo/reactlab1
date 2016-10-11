'use strict'
import { Provider } from 'react-redux'
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

// import custom components
import UserList from './user-list'
import Test from '../components/Test'
import allReducers from '../reducers/index'
import store from '../Store'


// created class for main container
export default class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <Test />
      </Provider>
    )
  }
}
