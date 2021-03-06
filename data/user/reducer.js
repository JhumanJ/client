import * as a from './actions'

const init = {
  id: -1,
  role: null,
  name: '',
  openEHRSessionId: '',
  loading: false,
  error: false
}

export default (state = init, action) => {
  switch (action.type) {
    case a.GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
        role: null
      }
    case a.GET_USER_SUCCESS:
      return {
        ...state,
        id: action.response.data.id,
        role: action.response.data.role,
        loading: false
      }
    case a.GET_USER_FAILURE:
      return {
        ...state,
        id: null,
        loading: false,
        error: action.error
      }
    case a.GET_OPEN_EHR_SESSION_ID_REQUEST:
      return {
        ...state,
        loading: true
      }
    case a.GET_OPEN_EHR_SESSION_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        openEHRSessionId: action.response.data.sessionId
      }
    case a.GET_OPEN_EHR_SESSION_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case a.SET_HARDCODED_USER:
      return {
        ...state,
        ...action.user
      }
    default:
      return state
  }
}
