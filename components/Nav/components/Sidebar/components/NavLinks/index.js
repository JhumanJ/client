import {style} from 'glamor'
import NavLink from './components/NavLink'

export default (props) => (
  <div className={styles.container}>
    <NavLink active={isActive('/')} href='/'>Home</NavLink>
    <NavLink active={isActive('/referrals')} href='/referrals'>Referrals</NavLink>
    <NavLink active={isActive('/triage')} href='/triage'>Triage</NavLink>
    <NavLink active={isActive('/case-preparation')} href='/case-preparation'>Case Preparation</NavLink>
    <NavLink active={isActive('/live-mdt')} href='/live-mdt'>Live MDT</NavLink>
    <NavLink active={isActive('/confirmation')} href='/confirmation'>Confirmation</NavLink>
    <NavLink active={isActive('/jobs')} href='/jobs'>Jobs</NavLink>
  </div>
)

const isActive = (link) => link === window.location.pathname

const styles = {
  container: style({
    padding: '15px 0'
  })
}
