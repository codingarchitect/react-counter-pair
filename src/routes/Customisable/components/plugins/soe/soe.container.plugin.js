import Soe from './soe.rt'
import extensibleComponent from '../extensible-component'

export const pluginMetadata = { 
  name              : "react-counter/soe/soe",
  sequence          : 1,
  active            : true,
  childPluginNames : [] 
}

export default extensibleComponent(Soe, pluginMetadata.name);