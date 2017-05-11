import React from 'react';
import { plugins } from '../../modules/plugin-store';

const PluginRenderer = (props) => {
  //if (props.pluginState && props.name) {
    ///const thisPluginState = props.pluginState[props.name];
    
    let renderedPlugins = plugins
      // .filter((plugin, i) => thisPluginState.childPluginNames.find(plugin.pluginMetadata.name))
      .map((plugin, i) => {
        let PluginElem = plugin.pluginComponent;
        return <PluginElem key={plugin.pluginMetadata.name} />
      })

    return (
      <div>
        { renderedPlugins }
      </div>
    )
  //}  
  /*return (
      <div>
      </div>
    )*/
};

export default PluginRenderer;