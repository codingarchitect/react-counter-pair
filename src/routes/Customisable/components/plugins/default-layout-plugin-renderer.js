import React from 'react'

const DefaultLayoutPluginRenderer = function(props, context) {
  const plugins = require('../../modules/plugin-store').plugins    
  if (props.pluginState && props.name) {
    const thisPluginState = props.pluginState[props.name];
    let renderedPlugins = plugins
      .filter((plugin, i) => thisPluginState.childPluginNames.find((childName) => childName === plugin.pluginMetadata.name))
      .map((plugin, i) => {
        let newProps = { 
          plugin,
          key: i
        }
        let PluginElem = plugin.pluginComponent; 
        return (
          <div className="plugin-item" key={i}>
            <PluginElem />
          </div>
        )
      })
    return (
      <div className="plugin-items">
        { renderedPlugins }
      </div>
    )
  }  else {
    return (
      <div>
        Plugin Error {props.name}
      </div>
    )
  }
};

export default DefaultLayoutPluginRenderer;