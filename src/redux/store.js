import {configureStore } from "@reduxjs/toolkit";
import citiesReducer from "../redux/reducer/citiesReducer"
const store={
    ciudad:citiesReducer
}

export default configureStore({
    reducer:store
})

