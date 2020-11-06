import { TEACHER_REGISTRATION_INIT, TEACHER_REGISTRATION_SUCCESS, TEACHER_REGISTRATION_FAILURE,
    TEACHER_LOGIN_FAILURE, TEACHER_LOGIN_INIT, TEACHER_LOGIN_SUCCESS,
     TEACHER_LOGOUT } from './ActionTypes';

export const teacherRegistrationInit = () => ({
    type: TEACHER_REGISTRATION_INIT
});

export const teacherRegistrationSuccess = teacher => ({
    type: TEACHER_REGISTRATION_SUCCESS,
    payload: teacher
});

export const teacherRegistrationFailure = error => ({
    type: TEACHER_REGISTRATION_FAILURE,
    payload: error
})

export const teacherLoginInit = () => ({
    type: TEACHER_LOGIN_INIT
});

export const teacherLoginSuccess = teacher => ({
    type: TEACHER_LOGIN_SUCCESS,
    payload: teacher
});

export const teacherLoginFailure = error => ({
    type: TEACHER_LOGIN_FAILURE,
    payload: error
});

export const teacherLogout = () => ({
    type: TEACHER_LOGOUT
})