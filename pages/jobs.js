import React from 'react'
import Layout from '../components/Layout'
import {initStore} from '../store'
import WithAuth from '../components/WithAuth'

class Jobs extends React.Component {
  render() {
    return (
      <Layout>
        <p>Jobs</p>
      </Layout>
    )
  }
}

export default WithAuth(initStore)(Jobs)
