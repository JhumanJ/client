import {initStore} from '../../store'
import {Provider} from 'react-redux'
import {rehydrate} from 'glamor'
// import Auth from '../Auth'
import Loader from '../Loader'
import Nav from '../Nav'

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
}

export default ({children, requireAuth = false, ...props}) => (
  <Provider store={initStore()}>
    <div requireAuth={requireAuth} {...props}>
      <Loader />
      <Nav children={children} />
    </div>
  </Provider>
)
