import React from 'react'
import {initStore} from '../store'
import withAuth from '../enhancers/withAuth'
import Layout from '../components/Layout'

class LiveMDT extends React.Component {
  render() {
    return (
      <Layout activePage={this.props.pathname}>
        <p>To be done by another team.</p>
      </Layout>
    )
  }
}

export default withAuth(initStore)(LiveMDT)
