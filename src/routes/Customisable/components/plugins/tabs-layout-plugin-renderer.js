import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'

const TabsLayoutPluginRenderer = function(props, context) {
  debugger;
  const plugins = require('../../modules/plugin-store').plugins    
  if (props.pluginState && props.name) {
    const thisPluginState = props.pluginState[props.name];
    let renderedPlugins = plugins
      .filter((plugin, i) => thisPluginState.childPluginNames.find((childName) => childName === plugin.pluginMetadata.name))
      .map((plugin, i) => {
        let newProps = { 
          plugin,
          key: plugin.pluginMetadata.name,
          eventKey: i,
          title: plugin.pluginMetadata.displayName
        }
        let PluginElem = plugin.pluginComponent; 
        return (
          <Tab {...props} {...newProps}>
            <PluginElem {...props} {...newProps}/>
          </Tab>
        )
      })
    return (
      <Tabs id={props.name}>
        { renderedPlugins }
      </Tabs>
    )
  }  else {
    return (
      <div>
        Plugin {props.name}
      </div>
    )
  }
};

export default TabsLayoutPluginRenderer;