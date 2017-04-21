import React from 'react'
import {initStore} from '../store'
import withAuth from '../enhancers/withAuth'
import Layout from '../components/Layout'

class LiveMDT extends React.Component {
  render() {
    return (
      <Layout>
        <p>To be done by another team.</p>
      </Layout>
    )
  }
}

export default withAuth(initStore)(LiveMDT)
