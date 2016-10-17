import { ActionConst } from 'react-native-router-flux'

const initialState = {
  scene: {}
}

export default function reducer(state = initialState, action = {}) {
  switch(action.type){
    // Focus action is dispatched when new scene comes in focus
    case ActionConst.FOCUS:
      return {
        ...state,
        scene: action.scene
    }

    default:
      return state
  }
}
