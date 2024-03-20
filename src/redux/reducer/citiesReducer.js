import { createReducer } from "@reduxjs/toolkit";
import { load, filterByname } from "../actions/citiesAction";

const initialState = {
    all: [],
    filtered: []
};

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(load, (state, action) => {
            return { ...state, all: action.payload, filtered: action.payload };
        })
        .addCase(filterByname, (state, action) => {
            const { value } = action.payload; 
            const filteredCities = state.all.filter(city =>
                city.name.toLowerCase().includes(value.trim().toLowerCase())
            );
            return { ...state, filtered: filteredCities };
        });
});

export default reducer;
