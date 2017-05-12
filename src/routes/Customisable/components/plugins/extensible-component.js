import React from 'react'
import { connect } from 'react-redux'
import PluginRenderer from './plugin-renderer'

const mapStateToProps = (state) => {
  if (!state) return ({ pluginState: {} })
  return ({
    pluginState: state.soe
  })
};

const extensibleComponent = function (ComponentToExtend, pluginName) {
  class ExtensibleComponentPP extends React.Component {
    render() {
      const newProps = {
        name: pluginName
      }
      return (
        <div className="extensibleWrapper">
          <ComponentToExtend {...this.props} />
          <PluginRenderer {...this.props} {...newProps} />
        </div>
      )
    }
  }
  return connect(
    mapStateToProps
  )(ExtensibleComponentPP);
}

export default extensibleComponent;