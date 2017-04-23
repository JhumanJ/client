import {style} from 'glamor'
import moment from 'moment'

export default ({title, comment, dueDate, onDelete, loading, ...props}) => (
  <div className={`${styles.container} ${loading && styles.loading}`}>
    <div className={styles.left}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.dueDate}>
        <span className={styles.dueDate_date}>due on {moment(dueDate).format('ddd DD MMM')}</span>
        <span className={styles.dueIn}>({moment(dueDate).fromNow()})</span>
      </p>
      <p className={styles.comment}>{comment}</p>
    </div>
    <div className={styles.right}>
      <button
        className={styles.button}
        onClick={onDelete}
        children='Delete' />
    </div>
  </div>
)

const styles = {
  container: style({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
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

  left: style({
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    flex: 1,
  }),

  right: style({
    display: 'flex',
    flexDirection: 'column',
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
    opacity: 0.8,
    margin: '0 0 10px'
  }),

  dueDate_date: style({
    fontWeight: 'bold',
  }),

  dueIn: style({
    marginLeft: '5px',
    opacity: .8,
  }),

  button: style({
    background: '#e74c3c',
    color: 'white',
    border: 0,
    transition: '220ms',
    flex: 1,

    ':hover': {
      background: '#c0392b'
    }
  })
}
