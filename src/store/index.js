import { combineReducers } from 'redux'
import uiReducer from './ui'
import counterReducer from './counter'

export default combineReducers({
  ui: uiReducer,
  counter: counterReducer
})
