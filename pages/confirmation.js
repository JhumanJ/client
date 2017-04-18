import React from 'react'
import WithAuth from '../components/WithAuth'
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

export default WithAuth(initStore)(Confirmation)