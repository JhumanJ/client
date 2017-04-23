import axios from 'axios'

// action types
export const SELECT_PATIENT = 'SELECT_PATIENT'
export const GET_OPEN_EHR_ID_REQUEST = 'GET_OPEN_EHR_ID_REQUEST'
export const GET_OPEN_EHR_ID_SUCCESS = 'GET_OPEN_EHR_ID_SUCCESS'
export const GET_OPEN_EHR_ID_FAILURE = 'GET_OPEN_EHR_ID_FAILURE'
export const STORE_REFERRAL_REQUEST = 'STORE_REFERRAL_REQUEST'
export const STORE_REFERRAL_SUCCESS = 'STORE_REFERRAL_SUCCESS'
export const STORE_REFERRAL_FAILURE = 'STORE_REFERRAL_FAILURE'

// action creators
const getOpenEHRIdRequest = () => ({type: GET_OPEN_EHR_ID_REQUEST})
const getOpenEHRIdSuccess = (request) => ({type: GET_OPEN_EHR_ID_SUCCESS, request})
const getOpenEHRIdFailure = (error) => ({type: GET_OPEN_EHR_ID_FAILURE, error})
const storeReferralRequest = () => ({type: STORE_REFERRAL_REQUEST})
const storeReferralSuccess = (response) => ({type: STORE_REFERRAL_SUCCESS, response})
const storeReferralFailure = (error) => ({type: STORE_REFERRAL_FAILURE, error})

// actions api
export const selectPatient = (patient) => ({type: SELECT_PATIENT, patient})
export const getOpenEHRId = (patientId, openEHRSessionId) => (dispatch) => {
  dispatch(getOpenEHRIdRequest())
  axios.get(`https://ehrscape.code4health.org/rest/v1/ehr/?subjectId=${patientId}&subjectNamespace=uk.nhs.nhs_number`, {
    headers: {
      Authorization: 'Basic dWNscGVhY2hfYzRoOlFXeFBwYnl3',
      'EHr-Session-disabled': openEHRSessionId,
      'Content-Type': 'application/json'
    }
  })
        .then(res => { console.log('res:', res); return dispatch(getOpenEHRIdSuccess(res)) })
        .catch(err => dispatch(getOpenEHRIdFailure(err)))
}
export const storeReferral = (referred_by_id, ehrID) => dispatch => {
  dispatch(storeReferralRequest())
  axios.post(`http://peachteam35.uksouth.cloudapp.azure.com:8080/api/referrals/`, {
    Referral: {referred_by_id, ehrID}
  })
        .then(res => dispatch(storeReferralSuccess(res)))
        .catch(err => dispatch(storeReferralFailure(err)))
}
