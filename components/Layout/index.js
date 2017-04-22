import {rehydrate} from 'glamor'
import Loader from '../Loader'
import Nav from '../Nav'
import Notifications, {notify} from 'react-notify-toast'

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
}

export default ({children, activePage, ...props}) => (
  <div {...props}>
    <Loader />
    <Nav activePage={activePage} children={children} />
    <Notifications />
  </div>
)
