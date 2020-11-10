import { SEND_EMAIL } from './ActionTypes';

export const sendEMail = email => ({
    type: SEND_EMAIL,
    payload: email
})