import React from 'react'
import { connect } from 'react-redux'
import Payments from './payments.rt';

export const pluginMetadata = { 
  name              : "react-counter/soe/payments",
  sequence          : 4,
  active            : true,
  childPluginNames : [] 
}

export default Payments