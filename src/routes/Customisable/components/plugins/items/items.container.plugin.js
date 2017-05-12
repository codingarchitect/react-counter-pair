import Items from './items.rt'
import extensibleComponent from '../extensible-component'
import DefaultLayoutPluginRenderer from '../default-layout-plugin-renderer'

export const pluginMetadata = { 
  name              : 'react-counter/soe/items',
  displayName       : 'Items',
  sequence          : 3,
  active            : true,
  childPluginNames : [] 
}

export default extensibleComponent(Items, pluginMetadata.name, DefaultLayoutPluginRenderer);