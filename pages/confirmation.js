import React from 'react'
import withAuth from '../enhancers/withAuth'
import {initStore} from '../store'
import Layout from '../components/Layout'
import CreateJob from '../components/CreateJob'

class Confirmation extends React.Component {
  render() {
    return (
      <Layout>
        <CreateJob/>
      </Layout>
    )
  }
}

export default withAuth(initStore)(Confirmation)
