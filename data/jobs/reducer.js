import * as a from './actions'

const init = {
    jobs: [],
    loading: false,
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
            }
        case a.DELETE_JOB_SUCCESS:
            return {
                ...state,
                jobs: state.jobs.filter(job => job.job_id !== action.id),
                loading: false,
            }
        case a.DELETE_JOB_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        default:
            return state
    }
}