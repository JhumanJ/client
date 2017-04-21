import {combineReducers} from 'redux'
import {default as user} from './user/reducer'
import {default as jobs} from './jobs/reducer'
import {default as referral} from './referral/reducer'

export default combineReducers({user, jobs, referral})
