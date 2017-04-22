import React from 'react'
import Layout from '../components/Layout'
import {initStore} from '../store'
import withAuth from '../enhancers/withAuth'
import JobsList from '../components/JobsList'

class Jobs extends React.Component {
  render () {
    return (
      <Layout activePage={this.props.pathname}>
        <JobsList />
      </Layout>
    )
  }
}

export default withAuth(initStore)(Jobs)
