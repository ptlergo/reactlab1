'use strict'

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ListView
} from 'react-native'

import RowItem from './RowItem'

// Create a class
export default class ListExample extends Component {
  constructor(props, context) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([ 'row 1', 'row 2' ]),
    };
  }

  // data that renders into the renderRow from render()
  renderRow(rowItem, key){
    return(
      <RowItem key={key} rowItem={rowItem} />
    )
  }

  componentDidMount(){
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(['pizza', 'cats'])
    })
  }

  render(){
    return (
      <View style={ styles.container }>
        <Text style={styles.h1}>ListView Example</Text>
        <ListView
          style={styles.listview}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    )
  }
}


// Create actual styles
const styles = StyleSheet.create({
  contaner:{
    flex: 1
  },
  h1:{
    flex: 1

  },
  listview:{
    flex:4
  }
})
