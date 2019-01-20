import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { increment, decrement } from 'store/counter/actions'

import Button from 'components/Button'

const Counter = ({ value, increment, decrement }) => {
  return (<div>
    <Button onClick={() => increment()}>Increment</Button>
    <div>{value}</div>
    <Button onClick={() => decrement()}>Decrement</Button>
  </div>
  )
}

export default connect(
  state => ({ value: state.counter.value }),
  dispatch => bindActionCreators({ increment, decrement }, dispatch)
)(Counter)

