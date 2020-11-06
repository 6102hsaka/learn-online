import { TEACHER_LOGIN_FAILURE, TEACHER_LOGIN_INIT, TEACHER_LOGIN_SUCCESS, TEACHER_LOGOUT, TEACHER_REGISTRATION_FAILURE, TEACHER_REGISTRATION_INIT, TEACHER_REGISTRATION_SUCCESS } from './teacher/ActionTypes';
import { STUDENT_LOGIN_FAILURE, STUDENT_LOGIN_INIT, STUDENT_LOGIN_SUCCESS, STUDENT_LOGOUT, 
    STUDENT_REGISTRATION_FAILURE, STUDENT_REGISTRATION_INIT, STUDENT_REGISTRATION_SUCCESS } from './student/ActionTypes';
import { ROLE_STUDENT, ROLE_TEACHER } from '../shared';

const initialState = {
    isLoading: false,
    role: '',
    user: '',
    errMsg: null
}

const AppReducer = (state=initialState, action) => {
    switch(action.type) {
        case STUDENT_LOGIN_INIT: 
        case STUDENT_REGISTRATION_INIT:
            return {
                ...state, isLoading:true, role:'', user:'', errMsg: null
            }
        case STUDENT_LOGIN_SUCCESS: 
        case STUDENT_REGISTRATION_SUCCESS:
            return {
                ...state, isLoading:false, role:ROLE_STUDENT, user:action.payload, errMsg:null
            }
        case STUDENT_LOGIN_FAILURE:
        case STUDENT_REGISTRATION_FAILURE:
            return {
                ...state, isLoading:false, role:'', user:'', errMsg:action.payload
            }
        case STUDENT_LOGOUT:
            return {
                ...state, isLoading:false, role:'', user:'', errMsg:null
            }
        case TEACHER_LOGIN_INIT:
        case TEACHER_REGISTRATION_INIT: 
            return {
                ...state, isLoading:true, role:'', user:'', errMsg: null
            }
        case TEACHER_LOGIN_SUCCESS:
        case TEACHER_REGISTRATION_SUCCESS:
            return {
                ...state, isLoading:false, role:ROLE_TEACHER, user:action.payload, errMsg:null
            }
        case TEACHER_LOGIN_FAILURE:
        case TEACHER_REGISTRATION_FAILURE:
            return {
                ...state, isLoading:false, role:'', user:'', errMsg:action.payload
            }
        case TEACHER_LOGOUT: 
            return {
                ...state, isLoading:false, role:'', user:'', errMsg:null
            }
        default:
            return {
                ...state
            }
    }
}

export default AppReducer;