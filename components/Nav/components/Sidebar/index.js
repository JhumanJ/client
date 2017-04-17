import React from 'react'
import {style} from 'glamor'
import Masthead from './components/Masthead'
import NavLinks from './components/NavLinks'

export default (props) => (
    <div className={styles.container} {...props}>
        <Masthead/>
        <NavLinks/>
    </div>
)

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        background: '#202D38',
        width: '180px',
        height: '100vh',
        overflowY: 'auto'
    })
}