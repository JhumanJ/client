import React from 'react'
import {style} from 'glamor'
import Masthead from './components/Masthead'
import LoginDropdown from './components/LoginDropdown'
import NavLinks from './components/NavLinks'

export default (props) => (
    <div className={styles.container} {...props}>
        <Masthead/>
        <LoginDropdown name="James Brooks"/>
        <div className={styles.divider}></div>
        <NavLinks/>
    </div>
)

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        background: '#2E3F4F',
        width: '210px',
        height: '100vh',
        overflowY: 'auto',
        fontFamily: 'Lato, sans-serif'
    }),
    divider: style({
        height:'1px',
        width: '60%',
        marginLeft: '25px',
        marginTop: '15px',
        background: 'white'
    })
}
