import React from 'react'
import {style} from 'glamor'

export default (props) => <button className={styles.button} {...props}/>

const styles = {
  button: style({
    display: 'inline-block',
    padding: '5px 10px 6px',
    background: '#202D38',
    color: 'white',
    boxSizing: 'border-box',
    cursor: 'pointer',

    ':hover': {
        background: '#404D58',
    },

    ':disabled': {
        cursor: 'default',
        background: '#aaa',
        color: '#eee',
    }
  })
}