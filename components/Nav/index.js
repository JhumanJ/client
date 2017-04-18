import {connect} from 'react-redux'
import Container from './components/Container'
import Page from './components/Page'
import Sidebar from './components/Sidebar'

// Pass in state data
export default connect(state => state)(({children, data, ...props}) => (
  <Container>
    <Sidebar user={data.user} />
    <Page children={children} />
  </Container>
))
