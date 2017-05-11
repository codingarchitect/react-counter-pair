// ------------------------------------
// Constants
// ------------------------------------
export const REGISTER_PLUGIN = 'REGISTER_PLUGIN'
export const DEACTIVATE_PLUGIN = 'DEACTIVATE_PLUGIN'
export const REGISTER_AS_CHILD_PLUGIN = 'REGISTER_AS_CHILD_PLUGIN'
export const DEACTIVATE_CHILD_PLUGIN = 'DEACTIVATE_CHILD_PLUGIN'

// ------------------------------------
// Action Creators
// ------------------------------------
export function registerPlugin(metadata) {
  return {
    type: REGISTER_PLUGIN,
    payload: metadata
  }
}
export function deactivatePlugin(name) {
  return {
    type: DEACTIVATE_PLUGIN,
    payload: name
  }
}
export function registerAsChildPlugin(parentName, childName) {
  return {
    type: REGISTER_AS_CHILD_PLUGIN,
    payload: { parentName, childName }
  }
}
export function deactivateChildPlugin(parentName, childName) {
  return {
    type: DEACTIVATE_CHILD_PLUGIN,
    payload: { parentName, childName }
  }
}
export const actionCreators = {
  registerPlugin,
  deactivatePlugin,
  registerAsChildPlugin,
  deactivateChildPlugin
}

// ------------------------------------
// Reducer
// ------------------------------------
function pluginExists(state, name) {
  const pluginName = Object.keys(state).find(key => key === name)
  return pluginName ? true : false
}

const childPluginNames = (state, action) => {
  switch (action.type) {
    case REGISTER_AS_CHILD_PLUGIN:
      return [ ...state, action.payload.childName ]
    case DEACTIVATE_CHILD_PLUGIN:
      return state.filter(pluginName => pluginName !== action.payload.childName)
    default:
      return state
  }
}

const plugin = (state, action) => {
  switch (action.type) {
    case REGISTER_PLUGIN:
      return {
        ...action.payload,        
        active: true,
        childPluginNames: action.payload.childPluginNames || []
      }
    case DEACTIVATE_PLUGIN:
      return {
        ...action.payload, 
        active: false
      }
    case REGISTER_AS_CHILD_PLUGIN:
    case DEACTIVATE_CHILD_PLUGIN:
      return {
        ...state,
        childPluginNames: childPluginNames(state.childPluginNames, action)
      }
    default:
      return state
  }
}

export default function pluginReducer(state = {}, action) {
  if (!action.payload) return state;
  const name = action.payload.name || action.payload.parentName
  if (typeof name === 'undefined') {    
    return state
  }
  const pluginAlreadyExists = pluginExists(state, name)
  if (pluginAlreadyExists && action.type === REGISTER_PLUGIN) return state  
  if (!pluginAlreadyExists && action.type !== REGISTER_PLUGIN) return state
  return {
    ...state,
    [name]: plugin(state[name], action)
  }
}

function requireAllPlugins(r) { 
  var plugins = [];
  r.keys().forEach((key) => {
    const pluginModule = r(key)
    const pluginMetadata = pluginModule.pluginMetadata
    const pluginComponent = pluginModule.default
    if (pluginMetadata && pluginComponent) {
      plugins.push({
        pluginMetadata,
        pluginComponent
      })
    }
    else {
      console.error(`A plugin must export a constant pluginMetadata and the plugin's react component as the default export.`)
    }
  });
  return plugins.sort((plugin1, plugin2) => plugin1.pluginMetadata.sequence - plugin2.pluginMetadata.sequence);
}

export const plugins = requireAllPlugins(require.context('../components/plugins/', true, /\plugin.js$/));

export function registerAllPlugins(store) {
  plugins.forEach((plugin) => {
    store.dispatch(registerPlugin(plugin.pluginMetadata));
  })
}

function requireAllPluginLinks(r) { 
  var pluginConnections = [];
  r.keys().forEach((key) => {
    const pluginLinkModule = r(key)
    const pluginConnectionMetadata = pluginLinkModule.pluginConnectionMetadata
    if (pluginConnectionMetadata) {
      pluginConnections.push({
        pluginConnectionMetadata
      })
    }
    else {
      console.error(`A plugin connection must export a constant pluginConnectionMetadata.`)
    }
  });
  return pluginConnections;
}

export const pluginConnections = requireAllPluginLinks(require.context('../components/plugin-connections/', true, /\plugin-link.js$/));

export function registerAllPluginConnections(store) {
  pluginConnections.forEach((pluginConnection) => {
    store.dispatch(registerAsChildPlugin(
      pluginConnection.pluginConnectionMetadata.parentName, 
      pluginConnection.pluginConnectionMetadata.childName))
  })
}