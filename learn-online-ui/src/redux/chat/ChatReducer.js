import { GET_MESSAGE_INIT, GET_MESSAGE_SUCCESS, GET_MESSAGE_FAILURE 
    } from './ActionTypes';

const initialState = {
    isLoading: false,
    messages: [],
    error: null,
    isSent: false
};

const ChatReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_MESSAGE_INIT:
            return {
                ...state, isLoading:true, messages: [], error: null, isSent: false
            }
        case GET_MESSAGE_SUCCESS: 
            return {
                ...state, isLoading:false, messages: action.payload, error: null, isSent: false
            }
        case GET_MESSAGE_FAILURE:
            return {
                ...state, isLoading:false, messages: [], error: action.payload, isSent: false
            }
        default:
            return state;
    }
}

export default ChatReducer;