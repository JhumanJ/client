import {createStore, applyMiddleware} from 'redux'
import {default as reducer} from './reducer'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

const middleware = applyMiddleware(thunkMiddleware, logger)

export const initStore = (initialState) => {
  return createStore(reducer, initialState, middleware)
}
