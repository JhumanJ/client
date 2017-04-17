import {style} from 'glamor'
import NavLink from './components/NavLink'

export default (props) => (
    <div className={styles.container}>
        <NavLink href="/" prefetch>Home</NavLink>
        <NavLink href="/live-mdt" prefetch>Live MDT</NavLink>
        <NavLink href="/referrals" prefetch>Referrals</NavLink>
        <NavLink href="/triage" prefetch>Triage</NavLink>
        <NavLink href="/confirmation" prefetch>Confirmation</NavLink>
        <NavLink href="/case-preparation" prefetch>Case Preparation</NavLink>
        <NavLink href="/jobs" prefetch>Jobs</NavLink>
    </div>
)

const styles = {
    container: style({
        padding: '15px 0'
    })
}