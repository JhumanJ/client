import {style} from 'glamor'
import moment from 'moment'

export default ({title, comment, dueDate, onDelete, loading, ...props}) => (
  <div className={`${styles.container} ${loading && styles.loading}`}>
    <h4 className={styles.title}>{title}</h4>
    <p className={styles.dueDate}><strong>{moment(dueDate).format('ddd DD MMM')}</strong> (due {moment(dueDate).fromNow()})</p>
    <p className={styles.comment}>{comment}</p>
    <button
      className={styles.button}
      onClick={onDelete}
      children='Delete' />
  </div>
)

const styles = {
  container: style({
    padding: '10px',
    background: 'white',
    border: '1px solid #ddd',
    transition: '150ms',
    borderRadius: '3px',
    marginBottom: '5px',

    ':hover': {
      boxShadow: '0 1px 2px rgba(0, 0, 0, .2)',
      background: 'dodgerblue',
      color: 'white'
    }
  }),

  loading: style({
    pointerEvents: 'none',
    opacity: 0.6
  }),

  title: style({
    margin: '0 0 5px'
  }),

  comment: style({
    margin: 0
  }),

  dueDate: style({
    fontSize: '11px',
    opacity: 0.6,
    margin: '0 0 10px'
  }),

  button: style({
    background: 'red',
    color: 'white',
    border: 0,

    ':hover': {
      background: 'darkred'
    }
  })
}
