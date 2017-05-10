import CounterPair from './counter-pair.rt'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => ({
  onReset: () => dispatch({ type: 'ResetCounters' })
});

export default connect(
  null,
  mapDispatchToProps
)(CounterPair);