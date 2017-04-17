import React from 'react'
import withRedux from 'next-redux-wrapper'
import {initStore, startClock} from '../store'
import Layout from '../components/Layout'
import {P, Heading} from '../components/Text'

class Index extends React.Component {
    static getInitialProps({store, isServer}) {
        store.dispatch({type: 'TICK', light: !isServer, ts: Date.now()})
        return {isServer}
    }

    componentDidMount() {
        this.timer = this.props.dispatch(startClock())
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return(
            <Layout>
                <Heading>Welcome to PEACH Cancer!</Heading>
                <P>Some body text goes here</P>
            </Layout>
        )
    }
}

export default withRedux(initStore)(Index)