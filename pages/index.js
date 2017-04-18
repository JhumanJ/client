import React from 'react'
import {initStore} from '../store'
import withRedux from 'next-redux-wrapper'
import Layout from '../components/Layout'

class Index extends React.Component {
  static getInitialProps ({store, isServer}) {
    console.log('store', store.getState())
    return {isServer}
  }

  componentDidMount () {}

  componentWillUnmount () {}

  render () {
    return (
      <Layout>
        <p>Some body text goes here</p>
      </Layout>
    )
  }
}

export default withRedux(initStore)(Index)
