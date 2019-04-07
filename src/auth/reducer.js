import { REGISTER_FAIL, REGISTER_REQUESTED, REGISTER_SUCCESS } from './constants'


const INITIAL_STATE = {
    user: {},
    isLoading: true,
    hasError: false
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REGISTER_REQUESTED:
        return {
            ...state,
            isLoading: true
        }
        case REGISTER_SUCCESS:
        return {
            ...state,
            isLoading: false,
            hasError: false,
            user: action.user
        }
        case REGISTER_FAIL:
        return {
            ...state,
            isLoading:false,
            hasError: true
        }
        default:
            return state;
    }
}