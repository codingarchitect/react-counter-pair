import * as React from 'react';
import { enhanceComponent } from 'prism';

const Counter = require('../../Counter/containers/CounterContainer').default

export const counter1Selector = (state) => state.counterPair.counter1;
export const counter2Selector = (state) => {
  return state.counterPair.counter2;
}

export const counter1Wrapper = (type) => `Counter1.${type}`;
export const counter2Wrapper = (type) => `Counter2.${type}`;

export const InstantiableCounter = enhanceComponent(Counter);

export default InstantiableCounter;