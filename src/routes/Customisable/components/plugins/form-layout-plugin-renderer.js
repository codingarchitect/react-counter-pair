import React from 'react'
import { Form } from 'react-bootstrap'

const FormLayoutPluginRenderer = function (props) {
  if (props.pluginState && props.name) {
    const pluginsModule = require('../../modules/plugin-store');
    const registerPlugin = pluginsModule.registerPlugin;
    const registerAsChildPlugin = pluginsModule.registerAsChildPlugin;
    const pluginsInThisTemplate = createPluginMetadata(
      props.formControls,
      props.dispatch, 
      registerPlugin, 
      registerAsChildPlugin, 
      props.name);
    var childPlugins = getChildPlugins(pluginsModule.plugins, props);
    if (!childPlugins) childPlugins = [];    
    let renderedPlugins = pluginsInThisTemplate
      .concat(childPlugins)
      .map((plugin, i) => {
        let PluginElem = plugin.pluginComponent;
        return (
          <PluginElem key={i} />
        )
      })
    return (
      <Form inline>
        {renderedPlugins}
      </Form>
    )
  } else {
    return (
      <div>
        Plugin {props.name}
      </div>
    )
  }
};

function registerPlugins(dispatch, registerPlugin, registerAsChildPlugin, pluginName, pluginsInThisTemplate, pluginLinks) {
  if (!FormLayoutPluginRenderer.pluginsRegistered) FormLayoutPluginRenderer.pluginsRegistered = {};
  if (!FormLayoutPluginRenderer.pluginsRegistered[pluginName]) {
    pluginsInThisTemplate.forEach((plugin) => dispatch(registerPlugin(plugin.pluginMetadata)));
    pluginLinks.forEach((link) => dispatch(registerAsChildPlugin(link.parentName, link.childName)));
    FormLayoutPluginRenderer.pluginsRegistered[pluginName] = true;
  }
}

function createPluginMetadata(formControls, dispatch, registerPlugin, registerAsChildPlugin, pluginName) {
  const pluginsInThisTemplate = [];
  const pluginLinks = [];
  Object.keys(formControls).map((key, index) => {
    const childPluginName = pluginName + '/' + key;
    pluginsInThisTemplate.push({
      pluginMetadata: {
        name: childPluginName,
        displayName: key,
        sequence: index,
        active: true,
        childPluginNames: []
      },
      pluginComponent: formControls[key]
    });
    pluginLinks.push({
      parentName: pluginName,
      childName: childPluginName
    });
  })
  registerPlugins(dispatch, registerPlugin, registerAsChildPlugin, pluginName, pluginsInThisTemplate, pluginLinks);
  return pluginsInThisTemplate;
}

function getChildPlugins(plugins, props) {
  var parentPlugin = props.pluginState[props.name];
  return plugins.filter((plugin) => parentPlugin.childPluginNames.find((childName) => childName === plugin.pluginMetadata.name));
}

export default FormLayoutPluginRenderer;