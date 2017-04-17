import React from 'react'
import Button from '../components/Button'
import Layout from '../components/Layout'
import Link from 'next/link'

export default () => (
    <Layout>
        <p>PEACH Cancer!</p>
        <Button>Press Me :)</Button>

        <Link href="/referrals"><a>here</a></Link>
    </Layout>
)
