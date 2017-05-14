import React from 'react'
import { connect } from 'react-redux'
import InvoiceAddress from './invoice-address.rt'

export const pluginMetadata = { 
  name              : "react-counter/soe/soh/invoice-address",
  displayName       : 'Invoice Address',
  sequence          : 7,
  active            : true,
  childPluginNames : [] 
}

export default InvoiceAddress