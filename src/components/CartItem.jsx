import React from "react";

import noPhoto from "assets/icons/no_photo.svg";

export const CartItem = ({
    handleRemoveFromCart,
    product_id,
    name,
    description,
    photo_url,
    colorsList,
    price,
}) => (
    <div className='cartItem'>
        <div className='cartItem__content'>
            <img src={photo_url ? `/images/${photo_url}` : noPhoto} alt='itemPhoto' />
            <div className='cartItem__content--info'>
                <div>
                    <span>{`Артикул ${product_id}`}</span>
                    <svg
                        onClick={() => handleRemoveFromCart(product_id)}
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path d='M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z' />
                    </svg>
                </div>
                <h3>{name}</h3>
                <p>{description}</p>
                <div className='cartItem__content--info--colors'>
                    <span>Колір:</span>
                    <ul>
                        {colorsList.map((color) => (
                            <li key={color} style={{ background: color }} />
                        ))}
                    </ul>
                </div>
                <span>{price}</span>
            </div>
        </div>
    </div>
);
