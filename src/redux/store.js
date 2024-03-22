import {configureStore } from "@reduxjs/toolkit";
import citiesReducer from "../redux/reducer/citiesReducer"
import userReducer from "./reducer/userReducer";
const store={
    ciudad:citiesReducer,
    user:userReducer
}

export default configureStore({
    reducer:store
})

