import React from 'react'

import PropTypes from 'prop-types'
import Counter from './counter.rt';

Counter.propTypes = {
  value         : PropTypes.number.isRequired,
  onIncrement   : PropTypes.func.isRequired,
  onDecrement   : PropTypes.func.isRequired
}

export default Counter;