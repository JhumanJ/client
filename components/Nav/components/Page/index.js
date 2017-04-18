import {style} from 'glamor'

export default (props) => (
  <div className={styles.container} {...props} />
)

const styles = {
  container: style({
    flex: 1,
    padding: '25px'
  })
}
