import React from 'react'
import { connect } from 'react-redux'
import InvoiceAddressCustomField from './invoice-address-custom-field'

export const pluginMetadata = { 
  name              : "react-counter/soe/soh/invoice-address/custom-field",
  displayName       : 'Custom',
  sequence          : 90,
  active            : true,
  childPluginNames  : [] 
};

export default InvoiceAddressCustomField;