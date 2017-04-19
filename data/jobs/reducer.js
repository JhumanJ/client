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
                loading: false,
                error: false,
                jobs: action.response.data.jobs,
            }
        case a.GET_JOBS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        default:
            return state
    }
}