import React from "react";

import noPhoto from "assets/icons/no_photo.svg";

export const ItemCard = ({ item, handleAddInCart, handleRemoveFromCart }) => {
    const { name, description, price, in_stock, product_id, photo_url, colorsList, inCart } = item;
    return (
        <div className='itemCard'>
            {inCart ? (
                <svg
                    onClick={() => handleRemoveFromCart(product_id)}
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='#f7a73a'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z' />
                </svg>
            ) : (
                <svg
                    onClick={() => handleAddInCart(item)}
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='#7B7C80'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z' />
                </svg>
            )}

            <img src={photo_url ? `/images/${photo_url}` : noPhoto} alt='timeImg' />
            <div className='itemCard__data'>
                <div className='itemCard__data__inStock'>
                    <span>{`Артикул ${product_id}`}</span>
                    {in_stock ? (
                        <span>
                            В наличии
                            <svg
                                width='16'
                                height='16'
                                viewBox='0 0 16 16'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M6.00042 10.8001L3.20042 8.00006L2.26709 8.9334L6.00042 12.6667L14.0004 4.66673L13.0671 3.7334L6.00042 10.8001Z'
                                    fill='#2C9074'
                                />
                            </svg>
                        </span>
                    ) : null}
                </div>
                <h3>{name}</h3>
                <span className='itemCard__data__description'>{description}</span>
                <div className='itemCard__data__colorsList'>
                    <span>Колір:</span>
                    <ul>
                        {colorsList.map((color) => (
                            <li key={color} style={{ background: color }}></li>
                        ))}
                    </ul>
                </div>
                <span className='itemCard__data__price'>{price}</span>
            </div>
        </div>
    );
};
