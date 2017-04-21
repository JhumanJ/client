import React from 'react'
import withAuth from '../enhancers/withAuth'
import {initStore} from '../store'
import Layout from '../components/Layout'
import Scheduler from '../components/Scheduler'

class Triage extends React.Component {
    render() {
        return (
            <Layout activePage={this.props.pathname}>
                <div>
                    <Scheduler/>
                </div>
            </Layout>
        )
    }
}

export default withAuth(initStore)(Triage)