import {style} from 'glamor'
import NavLink from './components/NavLink'

export default (props) => (
  <div className={styles.container}>
    <NavLink href='/'>Home</NavLink>
    <NavLink href='/referrals'>Referrals</NavLink>
    <NavLink href='/triage'>Triage</NavLink>
    <NavLink href='/case-preparation'>Case Preparation</NavLink>
    <NavLink href='/live-mdt'>Live MDT</NavLink>
    <NavLink href='/confirmation'>Confirmation</NavLink>
    <NavLink href='/jobs'>Jobs</NavLink>
  </div>
)

const styles = {
  container: style({
    padding: '15px 0'
  })
}
