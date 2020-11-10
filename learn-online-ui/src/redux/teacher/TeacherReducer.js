import { GET_ALL_TEACHER_INIT, GET_ALL_TEACHER_SUCCESS,
     GET_ALL_TEACHER_FAILURE } from "./ActionTypes";


const initialState = {
    isLoading: false,
    teachers: [],
    error: null
}

const TeacherReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_ALL_TEACHER_INIT:
            return {
                ...state, isLoading:true, teachers: [], error: null
            }
        case GET_ALL_TEACHER_SUCCESS:
            return {
                ...state, isLoading:false, teachers: action.payload, error: null
            }
        case GET_ALL_TEACHER_FAILURE:
            return {
                ...state, isLoading:false, teachers: [], error: action.payload
            }
        default:
            return state;
    }
}

export default TeacherReducer;