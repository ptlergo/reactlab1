'use strict'

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  StyleSheet,
  View,
  Text,
  ListView
} from 'react-native'

class UserList extends Component {

  createListItems() {
    return this.props.users.map((user)=> {
      return(
        <Text key={user.id}> {user.first}, </Text>
      )
    })
  }

  render() {
    return (
        <Text>
          {this.createListItems()}
        </Text>
      )
  }
}

// Send state from store into component as prop
function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(UserList);
