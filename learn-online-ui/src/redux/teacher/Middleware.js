import {} from './ActionTypes';
import { teacherLoginFailure, teacherLoginInit, teacherLoginSuccess, 
    teacherRegistrationFailure, teacherRegistrationInit, teacherRegistrationSuccess } from './ActionCreators';
import axios from 'axios';

export const loginTeacher = srcData => (dispatch) => {
    dispatch(teacherLoginInit());

    let formData = new FormData();
    for(const key in srcData) {
        formData.append(key, srcData[key]);
    }
    const options = {
        url: 'http://localhost:8080/teacher/login',
        method: 'POST',
        data: formData,
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
    };
    axios(options)
        .then(response => dispatch(teacherLoginSuccess(response.data)))
        .catch(error => dispatch(teacherLoginFailure(error.message)));
}

export const registerTeacher = srcData => (dispatch) => {
    dispatch(teacherRegistrationInit());
    
    let formData = new FormData();
    for(const key in srcData) {
        if(key!=='confirm') {
            formData.append(key, srcData[key]);
        }
    }
    const options = {
        url: 'http://localhost:8080/teacher/save',
        method: 'POST',
        data: formData,
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
    };
    axios(options)
        .then(response => dispatch(teacherRegistrationSuccess(response.data)))
        .catch(error => dispatch(teacherRegistrationFailure(error.message)));
}

