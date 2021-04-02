import React from "react";

export const FeedbackSlide = ({ name, photo, text, typeWork }) => (
    <div className='feedbackSlide'>
        <img src={photo} alt='userPhoto' />
        <div className='feedbackSlide__content'>
            <b>{name}</b>
            <span>{typeWork}</span>
            <p>{text}</p>
        </div>
    </div>
);
