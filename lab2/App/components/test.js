'use strict'
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

import UserList from '../containers/user-list'

// new class 'Test'
export default class Test extends Component {
  render(){
    return (
      <View style={styles.container}>
      <Text> Users: </Text>
      <UserList />
      </View>
    )
  }
}

// styles using StyleSheet create()
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#154495",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
