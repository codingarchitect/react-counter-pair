import React from 'react'
import { Form } from 'react-bootstrap'

const FormLayoutPluginRenderer = function(props, context) {
  var plugins = require('../../modules/plugin-store').plugins
  if (props.plugins) plugins = plugins.concat(props.plugins);    
  if (props.pluginState && props.name) {
    const thisPluginState = props.pluginState[props.name];
    let renderedPlugins = plugins
      .filter((plugin, i) => thisPluginState.childPluginNames.find((childName) => childName === plugin.pluginMetadata.name))
      .map((plugin, i) => {
        let PluginElem = plugin.pluginComponent; 
        return (
          <PluginElem key={i}/>          
        )
      })
    return (
      <Form inline>
        { renderedPlugins }
      </Form>
    )
  }  else {
    return (
      <div>
        Plugin {props.name}
      </div>
    )
  }
};

export default FormLayoutPluginRenderer;