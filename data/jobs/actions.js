import axios from 'axios'

const JOBS_API = 'https://google.co.uk/'

export const GET_JOBS_REQUEST = 'GET_JOBS_REQUEST'
export const GET_JOBS_SUCCESS = 'GET_JOBS_SUCCESS'
export const GET_JOBS_FAILURE = 'GET_JOBS_FAILURE'

const getJobsRequest = () => ({type: GET_JOBS_REQUEST})
const getJobsSuccess = (response) => ({type: GET_JOBS_SUCCESS, response})
const getJobsFailure = (error) => ({type: GET_JOBS_FAILURE, error})

export const getJobs = () => (
    dispatch => {
        dispatch(getJobsRequest())
        axios.post(JOBS_API)
            .then(res => dispatch(getJobsSuccess(res)))
            .catch(err => dispatch(getJobsFailure(err)))
    }
)