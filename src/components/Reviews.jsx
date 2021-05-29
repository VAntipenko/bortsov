import React from "react";
import { Carousel } from "3d-react-carousal";

import { BlockName } from "./BlockName";
import { WrapperBlock } from "./WrapperBlock";
import { FeedbackSlide } from "./FeedbackSlide";
import reviewsUserPhoto from "assets/images/reviewsUser.jpeg";
import reviewsUserPhot_02 from "assets/images/reviewsUser_02.jpg";
import reviewsUserPhot_03 from "assets/images/reviewsUser_03.jpg";
import reviewsUserPhot_04 from "assets/images/reviewsUser_04.jpg";

export const Reviews = () => {
  const slides = [
    <FeedbackSlide
      photo={reviewsUserPhoto}
      name="Анатолий Колесников"
      typeWork="Укладка тротуарой плитки. Частная территория"
      text="Очень доволен, качественное изделие. 6 лет назад поставил забор в частном доме. 
            В то время соседи ставили забор от другого производителя  у них он уже начал рассыпаться. 
            У меня как будто вчера поставил и столбики и панели в отличном состоянии. 
            Евгений очень добросовестный производитель. Покупкой доволен."
    />,
    <FeedbackSlide
      photo={reviewsUserPhot_02}
      name="Розалина Борцова"
      typeWork="Укладка тротуарой плитки. Частная территория"
      text="Восторг от обслуживания и качества тротуарной плитки. 
            Барский Двор сделал мой двор по настоящему барским.
            Если бы можно было поставить семь звёзд я бы это сделала с большим удовольствием.
            Спасибо Вам огромное."
    />,
    <FeedbackSlide
      photo={reviewsUserPhot_03}
      name="Оксана Бережная"
      typeWork="Укладка тротуарой плитки. Частная территория"
      text="Очень, очень довольна продукцией Барского Двора,
            полностью огородили под ключ мою огромную территорию прекрасным,
            прочным забором. Осталось положить плитку которую я выбрала тоже в 
            Барском Дворе, большой ассортимент цвета,
            можно воплотить фантазии  различными рисунками."
    />,
    <FeedbackSlide
      photo={reviewsUserPhot_04}
      name="Виталий Лавров"
      typeWork="Укладка тротуарой плитки. Частная территория"
      text="Придбав тротуарну плитку,якісна,своечасно виробили и привезли в обговорений термін.е
            счого вибрать,ну и саме головне приемна ціна,
            я щей домовився про знижку!господар дуже приемна и професійна людина.
            Розповість всі ньюанси и порадить най кращий вариант!рекомендую"
    />,
  ];
  return (
    <div id="/reviews">
      <WrapperBlock className="reviews">
        <BlockName name="reviews.blockName" subtext="reviews.label" />
        <div className="reviews__content">
          <Carousel slides={slides} />
        </div>
      </WrapperBlock>
    </div>
  );
};
