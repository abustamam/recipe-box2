import React from 'react'
import config from '../../config'
import Helmet from 'react-helmet'

export default () => {
  const styles = require('./Home.scss')
  // require the logo image both from client and server
  return (
    <div className={styles.home}>
      <Helmet title="Home"/>
      <div className={styles.masthead}>
        <div className="container">
          <h1>{config.app.title}</h1>

          <h2>{config.app.description}</h2>

          <p>
            <a
              className={styles.github}
              href="https://github.com/erikras/react-redux-universal-hot-example"
              target="_blank"
            />
          </p>

          <p className={styles.humility}>
            Adapted by <a href="https://twitter.com/rbustamam" target="_blank">Rasheed</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
