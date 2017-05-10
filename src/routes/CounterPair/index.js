import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'counter-pair',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const CounterPair = require('./components/CounterPair').default
      const reducer = require('./modules/counter-pair').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'counterPair', reducer })

      /*  Return getComponent   */
      cb(null, CounterPair)

    /* Webpack named bundle   */
    }, 'counterPair')
  }
})