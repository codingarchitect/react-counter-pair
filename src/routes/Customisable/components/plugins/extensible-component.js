import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  if (!state) return ({ pluginState: {} })
  return ({
    pluginState: state.soe
  })
};

const extensibleComponent = function (ComponentToExtend, pluginName, LayoutPluginRenderer) {
  class ExtensibleComponentPP extends React.Component {
    render() {
      const newProps = {
        name: pluginName
      }
      return (
        <div>
          <ComponentToExtend {...this.props} />
          <LayoutPluginRenderer {...this.props} {...newProps} />
        </div>
      )
    }
  }
  return connect(
    mapStateToProps
  )(ExtensibleComponentPP);
}

export default extensibleComponent;