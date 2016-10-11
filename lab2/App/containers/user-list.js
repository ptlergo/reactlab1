'use strict'

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

export default class UserList extends Component {
  render() {
    return (
      <Text>1</Text>
    )
  }

  // Send state from store into component as prop
  function mapStateToProps(state) {
    return {
      users: state.users
    }

  }
}
