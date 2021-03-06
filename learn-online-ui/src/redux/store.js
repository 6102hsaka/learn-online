import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import AppReducer from './reducer';
import TeacherReducer from './teacher/TeacherReducer';
import StudentReducer from './student/StudentReducer';
import EmailReducer from './email/EmailReducer';
import ChatReducer from './chat/ChatReducer';

const combinedReducers = combineReducers({
    app: AppReducer,
    teacher: TeacherReducer,
    student: StudentReducer,
    email: EmailReducer,
    chat: ChatReducer

})
const store = createStore(combinedReducers, applyMiddleware(thunk, logger));

export default store;