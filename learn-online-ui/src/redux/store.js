import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import AppReducer from './reducer';

const store = createStore(AppReducer, applyMiddleware(thunk, logger));

export default store;