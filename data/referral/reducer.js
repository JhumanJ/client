import * as a from './actions'

const init = {
    selectedPatient: {
        id: null,
        name: '',
    },
    openEHRId: '',
    loading: true,
    error: false,
}

export default (state = init, action) => {
    switch(action.type) {
        case a.SELECT_PATIENT:
            return {
                ...state,
                selectedPatient: action.patient,
            }
        case a.GET_OPEN_EHR_ID_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case a.GET_OPEN_EHR_ID_SUCCESS:
            return {
                ...state,
                openEHRId: action.request.data.ehrId,
                loading: false,
            }
        case a.GET_OPEN_EHR_ID_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false,
            }
        default:
            return state
    }
}