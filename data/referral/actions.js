import axios from 'axios'

// action types
export const SELECT_PATIENT = 'SELECT_PATIENT'
export const GET_OPEN_EHR_ID_REQUEST = 'GET_OPEN_EHR_ID_REQUEST'
export const GET_OPEN_EHR_ID_SUCCESS = 'GET_OPEN_EHR_ID_SUCCESS'
export const GET_OPEN_EHR_ID_FAILURE = 'GET_OPEN_EHR_ID_FAILURE'

// action creators
const getOpenEHRIdRequest = () => ({type: GET_OPEN_EHR_ID_REQUEST})
const getOpenEHRIdSuccess = (request) => ({type: GET_OPEN_EHR_ID_REQUEST, request})
const getOpenEHRIdFailure = (error) => ({type: GET_OPEN_EHR_ID_REQUEST, error})

// actions api
export const selectPatient = (patient) => ({type: SELECT_PATIENT, patient})
export const getOpenEHRId = (patientId, openEHRSessionId) => (dispatch) => {
    console.log('openEHRSessionId', openEHRSessionId)
    console.log('pID', patientId)
    dispatch(getOpenEHRIdRequest())
    axios.get(`https://ehrscape.code4health.org/rest/v1/ehr/?subjectId=${patientId}&subjectNamespace=uk.nhs.nhs_number`, {
        headers: {
            Authorization: 'Basic dWNscGVhY2hfYzRoOlFXeFBwYnl3',
            'EHr-Session-disabled': openEHRSessionId,
            'Content-Type': 'application/json',
        }
    })
        .then(res => {console.log('res', res);return getOpenEHRIdSuccess(res)})
        .catch(err => getOpenEHRIdFailure(err))
}
