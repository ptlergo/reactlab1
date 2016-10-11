'use strict'
import { Provider } from 'react-redux'
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

// import custom components
import Test from '../components/Test'
import allReducers from '../reducers/index'


// created class
export default class App extends Component {
  render(){
    return (
      <Test/>
    )
  }
}
