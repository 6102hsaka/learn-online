import axios from 'axios';
import { getMessageInit, getMessageSuccess, getMessageFailure } from './ActionCreator';

export const loadMessages = () => (dispatch) => {
    dispatch(getMessageInit());

    const options = {
        url: 'http://localhost:8080/message/get',
        method: 'GET',
    };
    axios(options)
        .then(response => dispatch(getMessageSuccess(response.data)))
        .catch(error => dispatch(getMessageFailure(error.message)));
}