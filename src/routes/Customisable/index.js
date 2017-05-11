import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'customisable',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Soe = require('./components/soe/soe.container').default
      const pluginRenderModule = require('./components/plugins/plugin-renderer')
      const pluginStoreModule = require('./modules/plugin-store')
      const reducer = pluginStoreModule.default
      const registerAllPlugins = pluginStoreModule.registerAllPlugins
      const registerAllPluginConnections = pluginStoreModule.registerAllPluginConnections

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'soe', reducer })
      registerAllPlugins(store)
      registerAllPluginConnections(store);

      /*  Return getComponent   */
      cb(null, Soe)

    /* Webpack named bundle   */
    }, 'soe')
  }
})