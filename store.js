import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {default as reducer} from './reducer'

export const initStore = (initialState) => {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
}
