import React from 'react'
import {style, merge} from 'glamor'

export default ({primary, ...props}) => <button className={primary ? styles().primary : styles().normal} {...props} />

const styles = () => {
  const normal = style({
    display: 'inline-block',
    padding: '5px 10px 6px',
    boxSizing: 'border-box',
    border: 0,
    background: '#f4f4f4',
    cursor: 'pointer',

    ':hover': {
      background: '#e5e5e5'
    },

    ':disabled': {
      background: '#f4f4f4',
      color: '#bbb'
    }
  })

  const primary = merge(normal, {
    background: '#202D38',
    color: 'white',

    ':hover': {
      background: '#404D58'
    },

    ':disabled': {
      cursor: 'default',
      background: '#bbb',
      color: '#eee'
    }
  })

  return {normal, primary}
}
