import {style} from 'glamor'

export default (props) => (
  <textarea className={styles.input} {...props} />
)

const styles = {
  input: style({
    display: 'block',
    width: '100%',
    border: '1px solid #ddd',
    padding: '8px'
  })
}
