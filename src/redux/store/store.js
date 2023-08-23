import { configureStore } from "@reduxjs/toolkit";
//Importing Reducers
import counterReducer from "../reducers/counterReducer";

export default store = configureStore({
	reducer: counterReducer
})