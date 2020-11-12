import { GET_MESSAGE_INIT, GET_MESSAGE_SUCCESS, GET_MESSAGE_FAILURE 
    } from './ActionTypes';


export const getMessageInit = () => ({
    type: GET_MESSAGE_INIT
});

export const getMessageSuccess = messages => ({
    type: GET_MESSAGE_SUCCESS,
    payload: messages
});

export const getMessageFailure = error => ({
    type: GET_MESSAGE_FAILURE,
    payload: error
});