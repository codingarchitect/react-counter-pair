import { Action } from 'redux';
import { buildReducer, buildUnwrapper } from 'prism';

const counterReducer = require('../../Counter/modules/counter').default
const initialState = {
  counter1: { counter: 0 },
  counter2: { counter: 0 },
}

export default buildReducer([{
  unwrapper: buildUnwrapper('Counter1'),
  handler: (state, action) => ({
    ...state,
    counter1: { counter: counterReducer(state.counter1.counter, action)}
  })
}, {
  unwrapper: buildUnwrapper('Counter2'),
  handler: (state, action) => {
    return ({
      ...state,
      counter2: { counter: counterReducer(state.counter2.counter, action)}
    })
  }
}, {
  unwrapper: buildUnwrapper('ResetCounters'),
  handler: (state, action) => initialState
}], initialState);