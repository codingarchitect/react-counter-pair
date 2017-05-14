import React from 'react'
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import InvoiceAddress from './invoice-address.rt'
import extensibleComponent from '../extensible-component'
import FormLayoutPluginRenderer from '../form-layout-plugin-renderer'

const addressForm = {
  Address1: (props) => (<FormGroup controlId="formInlineAddress1">
    <ControlLabel>Address1</ControlLabel>
    <FormControl type="text" placeholder="Address1" />
  </FormGroup>),
  Address2: (props) => (<FormGroup controlId="formInlineAddress2">
    <ControlLabel>Address2</ControlLabel>
    <FormControl type="text" placeholder="Address2" />
  </FormGroup>),
  Address3: (props) => (<FormGroup controlId="formInlineAddress3">
    <ControlLabel>Address3</ControlLabel>
    <FormControl type="text" placeholder="Address3" />
  </FormGroup>),
  Address4: (props) => (<FormGroup controlId="formInlineAddress4">
    <ControlLabel>Address4</ControlLabel>
    <FormControl type="text" placeholder="Address4" />
  </FormGroup>),
  Address5: (props) => (<FormGroup controlId="formInlineAddress5">
    <ControlLabel>Address5</ControlLabel>
    <FormControl type="text" placeholder="Address5" />
  </FormGroup>),
  Country: (props) => (<FormGroup controlId="formInlineCountry">
    <ControlLabel>Country</ControlLabel>
    <FormControl componentClass="select" placeholder="Country">
      <option value="UK">UK</option>
      <option value="US">US</option>
      <option value="Other">Other</option>
    </FormControl>
  </FormGroup>),
  Postcode: (props) => (<FormGroup controlId="formInlinePostcode">
    <ControlLabel>Postcode</ControlLabel>
    <FormControl type="text" placeholder="Postcode" />
  </FormGroup>)
};

export const pluginMetadata = { 
  name              : "react-counter/soe/soh/invoice-address",
  displayName       : 'Invoice Address',
  sequence          : 7,
  active            : true,
  childPluginNames : [] 
}

export default extensibleComponent(InvoiceAddress, pluginMetadata.name, FormLayoutPluginRenderer, addressForm);