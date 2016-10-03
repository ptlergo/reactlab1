'use strict'

import React, { Component } from 'react'
import {
  StyleSheet
} from 'react-native'

// import custom component
import Home from '../components/Home'
import ListExample from '../components/ListExample'
// Create a class
export default class App extends Component {
  // make a render for your returned ui
  render(){
    return (
      <ListExample style={ styles.container }/>
    )
  }
}

// Styling to fill whole screen
const styles = StyleSheet.create({
  container: {
    flex: 1
  }

})
