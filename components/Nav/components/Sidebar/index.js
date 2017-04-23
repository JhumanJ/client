import {style} from 'glamor'
import Masthead from './components/Masthead'
import LoginDropdown from './components/LoginDropdown'
import NavLinks from './components/NavLinks'

export default ({user, setHardcodedUser, activePage, ...props}) => (
  <div className={styles.container} {...props}>
    <Masthead />
    <LoginDropdown user={user} setHardcodedUser={setHardcodedUser} />
    <NavLinks activePage={activePage} />
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
  })
}
