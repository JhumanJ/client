import React from 'react'
import {style} from 'glamor'

export const Primary = (props) => <button className={styles.button} {...props}/>

const styles = {
  button: style({
    color: 'blue'
  })
}