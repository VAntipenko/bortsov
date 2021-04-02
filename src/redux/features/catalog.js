import { createSlice } from "@reduxjs/toolkit";
import some from "lodash/some";

import { products, colors } from "json/products_ru.json";

const initialState = {
    cart: [],
    goodsList: [],
    cartIsEmpty: true,
    activeCatagoryId: 0,
    activeCategoryName: "pavingSlabs",
    categoriesKeys: [
        { key: "pavingSlabs", id: 0 },
        { key: "euroFences", id: 1 },
        { key: "grapeColumns", id: 2 },
        { key: "curbs", id: 3 },
        { key: "cinderBlock", id: 4 },
        { key: "heatBlock", id: 5 },
    ],
};

const catalogSlice = createSlice({
    name: "Catalog",
    initialState,
    reducers: {
        setCategory: (state, action) => {
            const { id, key } = action.payload;
            state.activeCategoryName = key;
            state.activeCatagoryId = id;
        },

        setProducts: (state) => {
            const cart = JSON.parse(localStorage.getItem("cart"));
            state.goodsList = products
                .filter((item) => item.category_id === state.activeCatagoryId)
                .map((item) => ({
                    ...item,
                    inCart: some(cart, {
                        product_id: item.product_id,
                    }),
                    colorsList: item.colors_id.map((colorId) => colors[colorId]),
                }));
        },

        setCart: (state) => {
            state.cart = JSON.parse(localStorage.getItem("cart"));
        },

        addToCart: (state, action) => {
            const { item } = action.payload;
            const updateList = state.goodsList.map((obj) => {
                if (item.product_id === obj.product_id) {
                    return {
                        ...obj,
                        inCart: true,
                    };
                }
                return obj;
            });
            state.goodsList = updateList;
            const cartList = [...state.cart, item];
            state.cart = cartList;
            localStorage.setItem("cart", JSON.stringify(cartList));
        },

        removeFromCart: (state, action) => {
            const { id } = action.payload;
            const updateList = state.cart.filter((next) => next.product_id !== id);
            state.cart = updateList;
            localStorage.setItem("cart", JSON.stringify(updateList));
            const updateMainList = state.goodsList.map((obj) => {
                if (id === obj.product_id) {
                    return {
                        ...obj,
                        inCart: false,
                    };
                }
                return obj;
            });
            state.goodsList = updateMainList;
        },

        checkForEmptyCart: (state) => {
            if (state.cart.length > 0) {
                state.cartIsEmpty = false;
            } else if (state.cart.length <= 0) {
                state.cartIsEmpty = true;
            }
        },
    },
});

export const {
    setCart,
    addToCart,
    setCategory,
    setProducts,
    removeFromCart,
    checkForEmptyCart,
} = catalogSlice.actions;

export default catalogSlice.reducer;
