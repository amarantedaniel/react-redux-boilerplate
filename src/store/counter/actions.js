import { createAction } from 'redux-actions'
import * as constants from './constants'

const increment = createAction(constants.INCREMENT)
const decrement = createAction(constants.DECREMENT)



export {
  increment,
  decrement,
}
