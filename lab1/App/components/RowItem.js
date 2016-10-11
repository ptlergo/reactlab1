'use strict'

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ListView
} from 'react-native'

// Create a class
export default class RowItem extends Component {
  render(){
    return (
      <View style={ styles.container }>
        <Text style={styles.rowText}>{this.props.rowItem}</Text>
      </View>
    )
  }
}


// Create actual styles
const styles = StyleSheet.create({
  contaner:{
    flex: 1
  },
  rowText: {
    fontSize: 28,
    alignSelf: "stretch",
    padding: 20
  }
})
