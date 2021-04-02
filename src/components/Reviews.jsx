import React from "react";
import { Carousel } from "3d-react-carousal";

import { BlockName } from "./BlockName";
import { WrapperBlock } from "./WrapperBlock";
import { FeedbackSlide } from "./FeedbackSlide";
import reviewsUserPhoto from "assets/images/reviewsUser.jpeg";

export const Reviews = () => {
    const slides = [
        <FeedbackSlide
            photo={reviewsUserPhoto}
            name='Анатолий Колесников'
            typeWork='Укладка тротуарой плитки. Частная территория'
            text='Очень доволен, качественное изделие. 6 лет назад поставил забор в частном доме. 
            В то время соседи ставили забор от другого производителя  у них он уже начал рассыпаться. 
            У меня как будто вчера поставил и столбики и панели в отличном состоянии. 
            Евгений очень добросовестный производитель. Покупкой доволен.'
        />,
        <FeedbackSlide
            photo={reviewsUserPhoto}
            name='Анатолий Колесников'
            typeWork='Укладка тротуарой плитки. Частная территория'
            text='Очень доволен, качественное изделие. 6 лет назад поставил забор в частном доме. 
            В то время соседи ставили забор от другого производителя  у них он уже начал рассыпаться. 
            У меня как будто вчера поставил и столбики и панели в отличном состоянии. 
            Евгений очень добросовестный производитель. Покупкой доволен.'
        />,
        <FeedbackSlide
            photo={reviewsUserPhoto}
            name='Анатолий Колесников'
            typeWork='Укладка тротуарой плитки. Частная территория'
            text='Очень доволен, качественное изделие. 6 лет назад поставил забор в частном доме. 
            В то время соседи ставили забор от другого производителя  у них он уже начал рассыпаться. 
            У меня как будто вчера поставил и столбики и панели в отличном состоянии. 
            Евгений очень добросовестный производитель. Покупкой доволен.'
        />,
    ];
    return (
        <div id='/reviews'>
            <WrapperBlock className='reviews'>
                <BlockName name='reviews.blockName' subtext='reviews.label' />
                <div className='reviews__content'>
                    <Carousel slides={slides} />
                </div>
            </WrapperBlock>
        </div>
    );
};
