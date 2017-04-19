import React from 'react'
import {style} from 'glamor'

export default (props) => (
  <div className={styles.container} {...props} />
)

const styles = {
  container: style({
    
    minHeight: '100vh'
  })
}
