import React from "react";
import { useSelector } from "react-redux";

import { ItemCard } from "./ItemCard";

export const GoodsList = ({ handleAddInCart, handleRemoveFromCart }) => {
    const goodsList = useSelector(({ catalog }) => catalog.goodsList);

    return (
        <ul className='goodsList'>
            {goodsList.map((item) => (
                <ItemCard
                    key={item.product_id}
                    handleAddInCart={handleAddInCart}
                    handleRemoveFromCart={handleRemoveFromCart}
                    item={item}
                />
            ))}
        </ul>
    );
};
