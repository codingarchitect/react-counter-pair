import Items from './items.rt'
import extensibleComponent from '../extensible-component'

export const pluginMetadata = { 
  name              : "react-counter/soe/items",
  sequence          : 3,
  active            : true,
  childPluginNames : [] 
}

export default extensibleComponent(Items, pluginMetadata.name);