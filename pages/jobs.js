import React from 'react'
import Layout from '../components/Layout'
import {initStore} from '../store'
import WithAuth from '../components/WithAuth'
import JobsList from '../components/JobsList'

class Jobs extends React.Component {
  render() {
    return (
      <Layout>
        <JobsList/>
      </Layout>
    )
  }
}

export default WithAuth(initStore)(Jobs)
