import { createStore, applyMiddleware } from "redux";
import usersDataReducer from "./reducers.js";
import thunk from 'redux-thunk';

const store =  createStore(
	usersDataReducer,
	applyMiddleware(thunk)
);

export default store