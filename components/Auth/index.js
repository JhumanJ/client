import React from 'react'
import Router from 'next/router'
import {isLoggedIn} from '../../services/auth'
import {connect} from 'react-redux'

export default connect(state => ({role: state.data.user.role}), () => ({}))(({role, requireAuth, ...props}) => {
    if (requireAuth && !isLoggedIn(role)) {
        Router.push('/login')
    }
    return <div {...props}/>
})