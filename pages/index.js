import React from 'react'
import {initStore} from '../store'
import WithAuth from '../components/WithAuth'
import Layout from '../components/Layout'

class Index extends React.Component {
  render () {
    return (
      <Layout>
        <p>Some body text goes here...</p>
      </Layout>
    )
  }
}

export default WithAuth(initStore)(Index)