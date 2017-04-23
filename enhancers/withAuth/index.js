import React from 'react'
import Router from 'next/router'
import withRedux from 'next-redux-wrapper'

export default (store) => (Page) => (
    withRedux(store)(class extends React.Component {
      static async getInitialProps ({store, pathname}) {
        const isAuthenticated = !!store.getState().data.user.role
        return {isAuthenticated, pathname}
      }

      componentDidMount () {
        if (!this.props.isAuthenticated) {
          Router.push('/login')
        }
      }

      render () {
        return <Page {...this.props} />
      }
    })
)
