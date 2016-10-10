'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

// new class 'Test'
export default class Test extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text> Testing </Text>
      </View>
    )
  }
}

// styles using StyleSheet create()
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#154495",
    flex: 1
  }
})
