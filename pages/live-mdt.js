import React from 'react'
import {initStore} from '../store'
import WithAuth from '../components/WithAuth'
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

export default WithAuth(initStore)(LiveMDT)
