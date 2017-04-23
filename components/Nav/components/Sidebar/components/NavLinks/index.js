import {style} from 'glamor'
import NavLink from './components/NavLink'

export default ({activePage, ...props}) => {
  return (
    <div className={styles.container}>
      <NavLink active={activePage === '/'} href='/'>Home</NavLink>
      <NavLink active={activePage === '/referrals'} href='/referrals'>Referrals</NavLink>
      <NavLink active={activePage === '/triage'} href='/triage'>Triage</NavLink>
      <NavLink active={activePage === '/case-preparation'} href='/case-preparation'>Case Preparation</NavLink>
      <NavLink active={activePage === '/live-mdt'} href='/live-mdt'>Live MDT</NavLink>
      <NavLink active={activePage === '/confirmation'} href='/confirmation'>Confirmation</NavLink>
      <NavLink active={activePage === '/jobs'} href='/jobs'>Jobs</NavLink>
    </div>
  )
}

const styles = {
  container: style({
    padding: '15px 0'
  })
}
