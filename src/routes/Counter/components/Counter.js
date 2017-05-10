import React from 'react'
import PropTypes from 'prop-types'
import Counter from './counter.rt';

Counter.propTypes = {
  counter     : PropTypes.number.isRequired,
  doubleAsync : PropTypes.func.isRequired,
  increment   : PropTypes.func.isRequired
}

export default Counter
