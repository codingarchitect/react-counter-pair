import Soe from './soe.rt'
import extensibleComponent from '../extensible-component'
import TabsLayoutPluginRenderer from '../tabs-layout-plugin-renderer'

export const pluginMetadata = { 
  name              : "react-counter/soe/soe",
  displayName       : 'Sales Order Entry',
  sequence          : 1,
  active            : true,
  childPluginNames : [] 
}

export default extensibleComponent(Soe, pluginMetadata.name, TabsLayoutPluginRenderer);