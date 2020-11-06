import { STUDENT_REGISTRATION_INIT, STUDENT_REGISTRATION_SUCCESS, STUDENT_REGISTRATION_FAILURE,
    STUDENT_LOGIN_FAILURE, STUDENT_LOGIN_INIT, STUDENT_LOGIN_SUCCESS, 
    STUDENT_LOGOUT } from './ActionTypes';

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
})