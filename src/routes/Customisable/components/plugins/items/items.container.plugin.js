import { connect } from 'react-redux'
import { dispatch } from 'redux';
import Items from './items.rt'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

const mapStateToProps = (state) => {  
  debugger;
  if (!state) return ({ pluginState: {}})
  return ({
    pluginState: state.soe
  })
};

export const pluginMetadata = { 
  name              : "react-counter/soe/items",
  sequence          : 3,
  active            : true,
  childPluginNames : [] 
}

export default connect(
  mapStateToProps
)(Items);