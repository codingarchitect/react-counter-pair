import React from 'react'
import { Panel } from 'react-bootstrap'

const PanelLayoutPluginRenderer = function(props, context) {
  const plugins = require('../../modules/plugin-store').plugins    
  if (props.pluginState && props.name) {
    const thisPluginState = props.pluginState[props.name];
    let renderedPlugins = plugins
      .filter((plugin, i) => thisPluginState.childPluginNames.find((childName) => childName === plugin.pluginMetadata.name))
      .map((plugin, i) => {
        let PluginElem = plugin.pluginComponent; 
        return (
          <Panel header={plugin.pluginMetadata.displayName} key={i} eventKey={i} bsStyle="primary">
            <PluginElem />
          </Panel>
        )
      })
    return (
      <div>
        { renderedPlugins }
      </div>
    )
  }  else {
    return (
      <div>
        Plugin {props.name}
      </div>
    )
  }
};

export default PanelLayoutPluginRenderer;