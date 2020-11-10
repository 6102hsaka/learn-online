import { GET_ALL_STUDENT_INIT, GET_ALL_STUDENT_SUCCESS, 
    GET_ALL_STUDENT_FAILURE } from "./ActionTypes";

const initialState = {
    isLoading: false,
    students: [],
    error: null
}

const StudentReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_ALL_STUDENT_INIT: 
            return {
                ...state, isLoading: true, students: [], error: null
            }
        case GET_ALL_STUDENT_SUCCESS:
            return {
                ...state, isLoading: false, students: action.payload, error: null
            }
        case GET_ALL_STUDENT_FAILURE:
            return {
                ...state, isLoading: false, students: [], error: action.payload
            }
        default:
            return state;
    }
}

export default StudentReducer;