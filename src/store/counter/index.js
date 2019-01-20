import { handleActions } from 'redux-actions'

import { increment, decrement } from './actions'

const initialState = {
  value: 0
}

const reducer = handleActions({
  [increment]: (state, action) => ({
    ...state,
    value: state.value + 1,
  }),
  [decrement]: (state, action) => ({
    ...state,
    value: state.value - 1,
  }),
}, initialState)



export default reducer
