import React from 'react'
import Container from './components/Container'
import Sidebar from './components/Sidebar'

export default ({children, ...props}) => {
    return (
        <Container>
            <Sidebar/>
            <div>{children}</div>
        </Container>
    )
}