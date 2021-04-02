import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { CartItem } from "./CartItem";
import { setCart } from "redux/features/catalog";
import { LinkToMessenger } from "./LinkToMessenger";
import add from "assets/icons/add.svg";

export const Cart = ({ toggleShowCart, handleRemoveFromCart }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const cart = useSelector(({ catalog }) => catalog.cart);

    React.useEffect(() => {
        document.body.style.overflow = "hidden";
        dispatch(setCart());
    }, [dispatch]);

    React.useEffect(() => {
        return () => {
            document.body.style.overflow = "visible";
            history.push("/");
        };
    }, [history]);

    return (
        <div className='blackout'>
            <div className='cart' id='/cart'>
                <div className='cart__content'>
                    <div>
                        <h4>Вибране</h4>
                        <img src={add} alt='close-icon' onClick={toggleShowCart} />
                    </div>
                    <ul>
                        {cart &&
                            cart.map((item) => (
                                <CartItem
                                    handleRemoveFromCart={handleRemoveFromCart}
                                    key={item.product_id}
                                    {...item}
                                />
                            ))}
                    </ul>
                </div>
                <div className='cart__footer'>
                    <span>
                        Оформити замовлення
                        <br />
                        або дізнатися подробиці
                    </span>
                    <div>
                        <div className='cart__footer--links'>
                            <LinkToMessenger>Viber</LinkToMessenger>
                            <LinkToMessenger>Telegram</LinkToMessenger>
                        </div>
                        <div className='cart__footer--phones'>
                            <span>061 270 60 90</span>
                            <span>‎096 484 49 49</span>
                            <span>066 077 63 26</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
