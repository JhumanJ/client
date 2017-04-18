import {style} from 'glamor'

const users = [
  {
    id: 34,
    name: 'Normal User',
    role: 'normal',
  },
  {
    id: 50,
    name: 'Admin User',
    role: 'admin',
  }
]

export default ({user, setHardcodedUser, ...props}) => (
  <div className={styles.container} onChange={(e) => setHardcodedUser(users.find(user => user.id == e.target.value))}>
    <select className={styles.name} defaultValue={user.id || -1} selected={user.id}>
      <option value={-1} children="Annonomous"/>
      {users.map(item => <option key={item.id} children={item.name} value={item.id} />)}
    </select>
  </div>
)

const styles = {
  container: style({
    padding: '15px 25px',
  }),

  name: style({
    fontFamily: 'Lato, sans-serif',
    fontSize: '13px',
    color: 'white',
    background: 'none',
    border: 0,
    padding: 0,
  })
}
