import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { browserHistory, Router } from 'react-router'
// import { Provider } from 'react-redux'
import template from './app-container.rt';

class AppContainer extends Component {
  static propTypes = {
    routes : PropTypes.object.isRequired,
    store  : PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  /*render () {
    const { routes, store } = this.props

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Router history={browserHistory} children={routes} />
        </div>
      </Provider>
    )
  }*/
}

AppContainer.prototype.render = template;

export default AppContainer