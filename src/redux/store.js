import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

const cart = localStorage.getItem("cart");

if (!cart) {
    localStorage.setItem("cart", JSON.stringify([]));
}

export const store = configureStore({
    reducer: rootReducer,
});
