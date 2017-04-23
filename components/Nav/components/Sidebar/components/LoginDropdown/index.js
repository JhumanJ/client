import {style} from 'glamor'
import Select from 'react-select'

export default ({user, loading, setHardcodedUser, ...props}) => {
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
    },
  ]

  const handleChange = e => setHardcodedUser(users.find(item => item.id == e.value))

  return (
    <div className={styles.container}>
      <Select
        name="user-login"
        searchable={false}
        clearable={user.id !== -1}
        value={user.id || -1}
        resetValue={-1}
        disabled={loading}
        isLoading={loading}
        onChange={handleChange}
        options={[{value: -1, label: 'Anonymous'}, ...users.map(item => ({value: item.id, label: item.name}))]}/>
    </div>
  )
}

const styles = {
  container: style({
    padding: '15px 25px',
    background: 'rgba(255, 255, 255, .16)',
  }),
}
