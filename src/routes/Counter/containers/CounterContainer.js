import { connect } from 'react-redux'
import { dispatch } from 'redux';
import { increment, decrement } from '../modules/counter'
import Counter from '../components/Counter'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

const mapStateToProps = (state) => {
  if (!state) return ({ value: 0})
  return ({
    value: state.counter
  })
};

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(increment()),
  onDecrement: () => dispatch(decrement())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);