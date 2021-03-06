import axios from 'axios'

const OPEN_EHR_SESSION_ENDPOINT = 'https://ehrscape.code4health.org/rest/v1/session?username=uclpeach_c4h&password=QWxPpbyw'

// Action Types
export const GET_USER_REQUEST = 'GET_USER_REQUEST'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAILURE = 'GET_USER_FAILURE'
export const GET_OPEN_EHR_SESSION_ID_REQUEST = 'GET_OPEN_EHR_SESSION_ID_REQUEST'
export const GET_OPEN_EHR_SESSION_ID_SUCCESS = 'GET_OPEN_EHR_SESSION_ID_SUCCESS'
export const GET_OPEN_EHR_SESSION_ID_FAILURE = 'GET_OPEN_EHR_SESSION_ID_FAILURE'
export const SET_HARDCODED_USER = 'SET_HARDCODED_USER'

// Action Creators
const getUserRequest = () => ({type: GET_USER_REQUEST})
const getUserSuccess = (response) => ({type: GET_USER_SUCCESS, response})
const getUserFailure = (error) => ({type: GET_USER_FAILURE, error})
const getOpenEhrSessionIdRequest = () => ({type: GET_OPEN_EHR_SESSION_ID_REQUEST})
const getOpenEhrSessionIdSuccess = (response) => ({type: GET_OPEN_EHR_SESSION_ID_SUCCESS, response})
const getOpenEhrSessionIdFailure = (error) => ({type: GET_OPEN_EHR_SESSION_ID_FAILURE, error})

// Action Api
export const setHardcodedUser = _user => dispatch => {
  const user = _user || {
    id: -1,
    role: null,
    name: '',
  }
  // get openEHRSessionId if the user is not logged out.
  user.id !== -1 && dispatch(getOpenEhrSessionId())
  dispatch({type: SET_HARDCODED_USER, user})
}
export const getUser = (authToken) => {
  return dispatch => {
    dispatch(getUserRequest())
    axios.post('/api/user', {authToken})
      .then(res => dispatch(getUserSuccess(res)))
      .then(() => dispatch(getOpenEhrSessionId()))
      .catch(err => dispatch(getUserFailure(err)))
  }
}
export const getOpenEhrSessionId = () => (dispatch) => {
  dispatch(getOpenEhrSessionIdRequest())
  axios.post(OPEN_EHR_SESSION_ENDPOINT)
    .then((res) => dispatch(getOpenEhrSessionIdSuccess(res)))
    .catch((err) => dispatch(getOpenEhrSessionIdFailure(err)))
}
