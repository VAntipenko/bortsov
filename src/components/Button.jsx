import React from "react";
import classNames from "classnames";

export const SocialMessengerButton = ({ children, onClick }) => (
    <button onClick={onClick} className='socialMessengerButton'>
        {children}
    </button>
);

export const Button = ({ children, onClick, disabled, className }) => (
    <button
        disabled={disabled}
        onClick={onClick}
        className={classNames("button", `button__${className}`)}>
        {children}
    </button>
);

export const SliderButton = ({ children, onClick, className }) => (
    <button onClick={onClick} className={classNames("sliderButton", `sliderButton__${className}`)}>
        <img src={children} alt='arrow' />
    </button>
);
