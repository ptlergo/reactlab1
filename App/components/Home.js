'use strict'

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

// Create a class
export default class Home extends Component {
  render(){
    return (
      <View style={ styles.container }>
        <View style={ styles.flexOne }>
          <Text>Flex 1</Text>
        </View>
        <View style={ styles.flexTwo }>
          <Text>Flex 2</Text>
        </View>
        <View style={ styles.flexThree }>
          <Text>Flex 3</Text>
        </View>
        <View style={ styles.flexFour }>
          <Text>Flex 4</Text>
        </View>
      </View>
    )
  }
}


// Create actual styles
const styles = StyleSheet.create({
  contaner:{
    flex: 1
  },
  flexOne:{
    flex: 1,
    backgroundColor: "#e1e1e1",
    alignItems: "center",
    justifyContent: "center"

  },
  flexTwo:{
    flex: 2,
    backgroundColor: "#1b7431",
    alignItems: "center",
    justifyContent: "flex-end"

  },
  flexThree:{
    flex: 3,
    backgroundColor: "#9e2525",
    alignItems: "center",
    justifyContent: "space-around"


  },
  flexFour:{
    flex: 4,
    backgroundColor: "#154495",

  }
})
