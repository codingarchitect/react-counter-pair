import React from 'react'
import { connect } from 'react-redux'
import DeliveryAddress from './delivery-address.rt'

export const pluginMetadata = { 
  name              : "react-counter/soe/soh/delivery-address",
  displayName       : 'Delivery Address',
  sequence          : 6,
  active            : true,
  childPluginNames : [] 
}

export default DeliveryAddress