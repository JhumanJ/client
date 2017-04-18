import {initStore} from '../../store'
import {Provider} from 'react-redux'
import {style, rehydrate} from 'glamor'
import Loader from '../Loader'
import Nav from '../Nav'

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
}

export default ({children, ...props}) => (
    <Provider store={initStore()}>
        <div {...props}>
            <Loader/>
            <Nav children={children}/>
        </div>
    </Provider>
)