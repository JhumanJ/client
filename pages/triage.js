import React from 'react'
import WithAuth from '../components/WithAuth'
import {initStore} from '../store'
import Layout from '../components/Layout'
import Scheduler from '../components/Scheduler'

class Triage extends React.Component {
    render() {
        return (
            <Layout>
                <div>
                    <Scheduler/>
                </div>
            </Layout>
        )
    }
}

export default WithAuth(initStore)(Triage)