import React from 'react';
// import { plugins } from '../../modules/plugin-store';

const PluginRenderer = (props, context) => {
  const plugins = require('../../modules/plugin-store').plugins
  debugger;
    
  if (props.pluginState && props.name) {
    const thisPluginState = props.pluginState[props.name];
    let renderedPlugins = plugins
      .filter((plugin, i) => thisPluginState.childPluginNames.find((childName) => childName === plugin.pluginMetadata.name))
      .map((plugin, i) => {
        let PluginElem = plugin.pluginComponent;
        return <PluginElem key={plugin.pluginMetadata.name} />
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

export default PluginRenderer;