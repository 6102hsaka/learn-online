import {} from './ActionTypes';
import { getAllStudentFailure, getAllStudentInit, getAllStudentSuccess,
        studentLoginFailure, studentLoginInit, studentLoginSuccess,
        studentRegistrationFailure, studentRegistrationInit, studentRegistrationSuccess 
    } from './ActionCreators';
import axios from 'axios';

export const loginStudent = srcData => (dispatch) => {
    dispatch(studentLoginInit());

    let formData = new FormData();
    for(const key in srcData) {
        formData.append(key, srcData[key]);
    }
    const options = {
        url: 'http://localhost:8080/student/login',
        method: 'POST',
        data: formData,
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
    };
    axios(options)
        .then(response => dispatch(studentLoginSuccess(response.data)))
        .catch(error => dispatch(studentLoginFailure(error.message)));
}

export const registerStudent = srcData => (dispatch) => {
    dispatch(studentRegistrationInit());

    let formData = new FormData();
    for(const key in srcData) {
        if(key!=='confirm') {
            formData.append(key, srcData[key]);
        }
    }
    const options = {
        url: 'http://localhost:8080/student/save',
        method: 'POST',
        data: formData,
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
    };
    axios(options)
        .then(response => dispatch(studentRegistrationSuccess(response.data)))
        .catch(error => dispatch(studentRegistrationFailure(error.message)));
}

export const loadStudents = () => (dispatch) => {
    dispatch(getAllStudentInit());

    const options = {
        url: 'http://localhost:8080/student/students',
        method: 'GET',
    }
    axios(options)
        .then(response => dispatch(getAllStudentSuccess(response.data)))
        .catch(error => dispatch(getAllStudentFailure(error.message)));
}