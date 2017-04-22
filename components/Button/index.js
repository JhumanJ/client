import React from 'react'
import {style, merge} from 'glamor'

export default ({primary, ...props}) =>
  <button
    className={primary ? styles().primary : styles().normal}
    {...props} />

const styles = () => {
  const normal = style({
    display: 'inline-block',
    padding: '4px 10px 5px',
    boxSizing: 'border-box',
    border: 0,
    background: '#f4f4f4',
    cursor: 'pointer',
    transition: '150ms',

    ':hover': {
      background: '#e5e5e5'
    },

    ':disabled': {
      background: '#f4f4f4',
      color: '#bbb'
    }
  })

  const primary = merge(normal, {
    background: '#2E3F4F',
    color: 'white',
    borderRadius: '3px',

    ':hover': {
      background: '#4E5F7F'
    },

    ':disabled': {
      cursor: 'default',
      background: '#bbb',
      color: '#eee'
    }
  })

  return {normal, primary}
}
