import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import Helmet from 'react-helmet'
import {push} from 'react-router-redux'
import 'antd/lib/style/index.less'

import config from '../../config'

@connect(() => ({}), {pushState: push})
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    pushState: PropTypes.func.isRequired
  }

  static contextTypes = {
    store: PropTypes.object.isRequired
  }

  render() {
    const styles = require('./App.sass')
    return (
      <div className={styles.app}>
        <Helmet {...config.app.head} />
        <header className={styles.appHeader}>
          <div>{config.app.title}</div>
        </header>

        <div className={styles.appContent}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
