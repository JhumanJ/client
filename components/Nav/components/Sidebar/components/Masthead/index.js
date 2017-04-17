import React from 'react'
import {style} from 'glamor'

export default ({...props}) => (
    <div className={styles.container}>
        <img className={styles.image} src={"https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png"}/>
    </div>
)

const styles = {
    container: style({
        background: 'rgba(0, 0, 0, .2)',
        position: 'relative',
        padding: '25px'
    }),
    image: style({
        width: '100%',
    })
}