import React from 'react'
import {style} from 'glamor'

export default ({...props}) => (
    <div className={styles.container}>
        <img className={styles.image} src="/static/img/logo.png"/>
    </div>
)

const styles = {
    container: style({
        position: 'relative',
        padding: '25px'
    }),
    image: style({
        width: '120px',
    })
}
