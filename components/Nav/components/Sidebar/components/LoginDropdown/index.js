import {style} from 'glamor'
import Select from 'react-select'

export default ({user, loading, setHardcodedUser, ...props}) => {
  const users = [
    {
      id: 34,
      name: 'Normal User',
      role: 'normal'
    },
    {
      id: 50,
      name: 'Admin User',
      role: 'admin'
    }
  ]

  const handleChange = (e) => {
    setHardcodedUser(users.find(item => item.id == e.value))
  }

  return (
    <div className={styles.container} onChange={handleChange}>
      <Select
        name="user-select"
        value={user.id || -1}
        disabled={loading}
        isLoading={loading}
        onChange={handleChange}
        options={[{value: -1, label: 'Anonymous'}, ...users.map(user => ({value: user.id, label: user.name}))]}/>
    </div>
  )
}

const styles = {
  container: style({
    padding: '15px 25px',
    background: 'rgba(255, 255, 255, .16)',
  }),
  visibleOption: style({
    color: 'black'
  }),
  name: style({
    fontFamily: 'Lato, sans-serif',
    fontSize: '13px',
    color: 'white',
    background: 'none',
    border: 0,
    padding: 0
  })
}
