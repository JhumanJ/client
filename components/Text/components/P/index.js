import {style} from 'glamor'

export default (props) => <p className={styles.p} {...props} />

const styles = {
  p: style({
    color: '#232325',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontSize: '13px',
    marginBottom: '15px'
  })
}
