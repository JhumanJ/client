import {style} from 'glamor'
import Masthead from './components/Masthead'
import LoginDropdown from './components/LoginDropdown'
import NavLinks from './components/NavLinks'

export default ({user, setHardcodedUser, ...props}) => (
  <div className={styles.container} {...props}>
    <Masthead />
    <LoginDropdown user={user} setHardcodedUser={setHardcodedUser} />
    <div className={styles.divider} />
    <NavLinks />
  </div>
)

const styles = {
  container: style({
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    background: '#2E3F4F',
    width: '210px',
    height: '100vh',
    overflowY: 'auto',
    fontFamily: 'Lato, sans-serif'
  }),
  divider: style({
    height: '1px',
    width: '60%',
    marginLeft: '25px',
    marginTop: '15px',
    background: 'white'
  })
}
