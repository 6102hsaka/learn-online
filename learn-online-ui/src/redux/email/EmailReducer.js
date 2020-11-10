import axios from 'axios';
import { SEND_EMAIL } from './ActionTypes';

const initialState = {
    email: null
}

const EmailReducer = (state=initialState, action) => {
    switch(action.type) {
        case SEND_EMAIL: {
            let formData = new FormData();
            for(const key in action.payload) {
                formData.append(key, action.payload[key]);
            }
            let newState = {...state};

            const options = {
                url: 'http://localhost:8080/teacher/send',
                method: 'POST',
                data: formData,
                headers: { 'content-type': 'application/x-www-form-urlencoded' }
            };
            axios(options)
                .then(response => {
                    if(response.status===200) {
                        newState.email = response.data;
                    } else {
                        newState.email = null;
                    }
                })
                .catch(error => {
                    console.log(error);
                    newState.email = null;
                })
            return newState;
        }
        default:
            return state;
    }
}

export default EmailReducer;