import React from 'react'
import {initStore} from '../store'
import Router from 'next/router'
import withRedux from 'next-redux-wrapper'
import {isLoggedIn} from '../services/auth'
import Layout from '../components/Layout'

class Index extends React.Component {
  static getInitialProps ({store, isServer}) {
    return {isServer}
  }

  componentDidMount () {}

  componentWillUnmount () {}

  render () {
    return (
      <Layout requireAuth>
        <p>Some body text goes here</p>
      </Layout>
    )
  }
}

export default withRedux(initStore)(Index)
