import { STUDENT_REGISTRATION_INIT, STUDENT_REGISTRATION_SUCCESS, STUDENT_REGISTRATION_FAILURE,
    STUDENT_LOGIN_FAILURE, STUDENT_LOGIN_INIT, STUDENT_LOGIN_SUCCESS, 
    STUDENT_LOGOUT, 
    GET_ALL_STUDENT_INIT, GET_ALL_STUDENT_SUCCESS, GET_ALL_STUDENT_FAILURE
    } from './ActionTypes';

export const studentRegistrationInit = () => ({
    type: STUDENT_REGISTRATION_INIT
});

export const studentRegistrationSuccess = student => ({
    type: STUDENT_REGISTRATION_SUCCESS,
    payload: student
});

export const studentRegistrationFailure = error => ({
    type: STUDENT_REGISTRATION_FAILURE,
    payload: error
})

export const studentLoginInit = () => ({
    type: STUDENT_LOGIN_INIT
});

export const studentLoginSuccess = student => ({
    type: STUDENT_LOGIN_SUCCESS,
    payload: student
});

export const studentLoginFailure = error => ({
    type: STUDENT_LOGIN_FAILURE,
    payload: error
});

export const studentLogout = () => ({
    type: STUDENT_LOGOUT
});

export const getAllStudentInit = () => ({
    type: GET_ALL_STUDENT_INIT
});

export const getAllStudentSuccess = students => ({
    type: GET_ALL_STUDENT_SUCCESS,
    payload: students
});

export const getAllStudentFailure = error => ({
    type:GET_ALL_STUDENT_FAILURE,
    payload: error
})