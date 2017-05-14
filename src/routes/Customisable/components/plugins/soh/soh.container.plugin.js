import Soh from './soh.rt'
import extensibleComponent from '../extensible-component'
import PanelLayoutPluginRenderer from '../panel-layout-plugin-renderer'

export const pluginMetadata = { 
  name              : 'react-counter/soe/soh',
  displayName       : 'Header',
  sequence          : 2,
  active            : true,
  childPluginNames : [] 
}

export default extensibleComponent(Soh, pluginMetadata.name, PanelLayoutPluginRenderer);