import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeLang: "uk",
    languages: [
        { name: "укр", lang: "uk" },
        { name: "рус", lang: "ru" },
    ],
};

const langSlice = createSlice({
    name: "Lang",
    initialState,
    reducers: {
        setLang: (state, action) => {
            state.activeLang = action.payload;
        },
    },
});

export const { setLang } = langSlice.actions;

export default langSlice.reducer;
