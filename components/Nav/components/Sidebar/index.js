import React from 'react'
import {style} from 'glamor'
import Masthead from './components/Masthead'
import LoginDropdown from './components/LoginDropdown'
import NavLinks from './components/NavLinks'

export default (props) => (
    <div className={styles.container} {...props}>
        <Masthead/>
        <LoginDropdown name="James Brooks"/>
        <NavLinks/>
    </div>
)

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        background: '#202D38',
        width: '210px',
        height: '100vh',
        overflowY: 'auto'
    })
}
