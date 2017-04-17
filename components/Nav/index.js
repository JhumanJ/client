import React from 'react'
import Container from './components/Container'
import Page from './components/Page'
import Sidebar from './components/Sidebar'

export default ({children, ...props}) => (
    <Container>
        <Sidebar/>
        <Page children={children}/>
    </Container>
)