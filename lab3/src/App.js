/**
  navigating using flux
**/
import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'

import HomeScreen from './containers/HomeScreen'
import NavDemo from './containers/NavDemo'
import NestedTarget from './containers/NestedTarget'

const RouterWithRedux = connect()(Router)

import reducers from './reducers'

const middleware = [ /*thunk*/ ]
const store = compose (
  applyMiddleware(...middleware)
)(createStore)(reducers)

export default class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="home"
              component={HomeScreen}
              initial={true}
              title="Home"
            />
            <Scene key="navDemo"
              component={NavDemo}
              title="Navigation Demo"
            />
            <Scene key="nestedTarget"
              component={NestedTarget}
              title="The Nest"
            />
          </Scene>
        </RouterWithRedux>
      </Provider>
    )
  }
}
