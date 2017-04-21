import React from 'react'
import {initStore} from '../store'
import withAuth from '../enhancers/withAuth'
import Layout from '../components/Layout'

class Index extends React.Component {
  render () {
    return (
      <Layout activePage={this.props.pathname}>
        <p>Welcome!</p>
      </Layout>
    )
  }
}

export default withAuth(initStore)(Index)
