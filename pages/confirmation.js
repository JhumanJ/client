import React from 'react'
import withAuth from '../enhancers/withAuth'
import {initStore} from '../store'
import Layout from '../components/Layout'

class Confirmation extends React.Component {
  render() {
    return (
      <Layout>
        <p>Confirmation</p>
      </Layout>
    )
  }
}

export default withAuth(initStore)(Confirmation)
