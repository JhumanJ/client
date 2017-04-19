import React from 'react'
import Layout from '../components/Layout'
import withRedux from 'next-redux-wrapper'
import {initStore} from '../store'

class Login extends React.Component {render() {
    return (
      <Layout>
        <p>Please login!</p>
      </Layout>
    )
  }
}

export default withRedux(initStore)(Login)
