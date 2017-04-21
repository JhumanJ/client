import axios from 'axios'

const JOBS_API = 'http://peachteam35.uksouth.cloudapp.azure.com:8080/api/jobs/'
const DELETE_API = (id) => `http://peachteam35.uksouth.cloudapp.azure.com:8080/api/jobs/${id}`

export const GET_JOBS_REQUEST = 'GET_JOBS_REQUEST'
export const GET_JOBS_SUCCESS = 'GET_JOBS_SUCCESS'
export const GET_JOBS_FAILURE = 'GET_JOBS_FAILURE'
export const DELETE_JOB_REQUEST = 'DELETE_JOB_REQUEST'
export const DELETE_JOB_SUCCESS = 'DELETE_JOB_SUCCESS'
export const DELETE_JOB_FAILURE = 'DELETE_JOB_FAILURE'

const getJobsRequest = () => ({type: GET_JOBS_REQUEST})
const getJobsSuccess = (response) => ({type: GET_JOBS_SUCCESS, response})
const getJobsFailure = (error) => ({type: GET_JOBS_FAILURE, error})
const deleteJobRequest = (id) => ({type: DELETE_JOB_REQUEST, id})
const deleteJobSuccess = (id) => ({type: DELETE_JOB_SUCCESS, id})
const deleteJobFailure = (error) => ({type: DELETE_JOB_FAILURE, error})

export const getJobs = () => (
    dispatch => {
        dispatch(getJobsRequest())
        axios.get(JOBS_API)
            .then(res => dispatch(getJobsSuccess(res)))
            .catch(err => dispatch(getJobsFailure(err)))
    }
)

export const deleteJob = (id) => dispatch => {
    dispatch(deleteJobRequest(id))
    axios.delete(DELETE_API(id))
        .then(() => dispatch(deleteJobSuccess(id)))
        .catch(err => dispatch(deleteJobFailure(err)))
}