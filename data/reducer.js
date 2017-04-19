import {combineReducers} from 'redux'
import {default as user} from './user/reducer'
import {default as jobs} from './jobs/reducer'

export default combineReducers({user, jobs})
