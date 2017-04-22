import {style} from 'glamor'

export default (props) => (
  <div className={styles.container} {...props} />
)

const styles = {
  container: style({
    padding: '25px',
    marginLeft: '210px'
  })
}
