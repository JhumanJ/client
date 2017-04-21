import {connect} from 'react-redux'
import Container from './components/Container'
import Page from './components/Page'
import Sidebar from './components/Sidebar'
import {setHardcodedUser} from '../../data/user/actions'

// Pass in state data
const Nav = ({children, data, setHardcodedUser, activePage, ...props}) => (
  <Container>
    <Sidebar user={data.user} setHardcodedUser={setHardcodedUser} activePage={activePage} />
    <Page children={children} />
  </Container>
)

const mapDispatchToProps = dispatch => ({
  setHardcodedUser: user => dispatch(setHardcodedUser(user))
})


export default connect(state => state, mapDispatchToProps)(Nav)
