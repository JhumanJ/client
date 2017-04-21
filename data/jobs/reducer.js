import * as a from './actions'

const init = {
    jobs: [],
    loading: false,
    jobLoading: false,
    error: false,
}

export default (state = init, action) => {
    switch(action.type) {
        case a.GET_JOBS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case a.GET_JOBS_SUCCESS:
            return {
                ...state,
                jobs: action.response.data,
                loading: false,
                error: false,
            }
        case a.GET_JOBS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        case a.DELETE_JOB_REQUEST:
            return {
                ...state,
                jobLoading: action.id,
            }
        case a.DELETE_JOB_SUCCESS:
            return {
                ...state,
                jobs: state.jobs.filter(job => job.job_id !== action.id),
                jobLoading: false,
            }
        case a.DELETE_JOB_FAILURE:
            return {
                ...state,
                jobLoading: false,
                error: action.error,
            }
        case a.CREATE_JOB_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case a.CREATE_JOB_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case a.CREATE_JOB_FAILURE:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}