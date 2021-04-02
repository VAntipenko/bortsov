import React from "react";
import { useTranslation } from "react-i18next";

import { WrapperBlock } from "./WrapperBlock";
import { BlockName } from "./BlockName";
import howWeWorkImg from "assets/images/howWeWorkImg.png";

export const HowWeWork = () => {
    const { t } = useTranslation();

    const howWeWorkListKey = [
        { key: "departureMasterForMeasurement" },
        { key: "registrationApplication" },
        { key: "delivery" },
    ];

    return (
        <WrapperBlock className='howWeWork'>
            <BlockName id='howWeWork' subtext='howWeWork.label' name='howWeWork.blockName' />
            <div className='howWeWork__content'>
                <img src={howWeWorkImg} alt='howWeWorkImg' />
                <ul className='howWeWork__content__list'>
                    {howWeWorkListKey.map((step) => (
                        <li className='howWeWork__content__list__item' key={step.key}>
                            <div className='howWeWork__content__list__item__mark'>
                                <svg
                                    width='48'
                                    height='48'
                                    viewBox='0 0 48 48'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <circle cx='24' cy='24' r='12' fill='#F4F4F4' />
                                    <circle
                                        cx='24'
                                        cy='24'
                                        r='22.5'
                                        stroke='#F4F4F4'
                                        strokeWidth='3'
                                    />
                                </svg>
                                <svg
                                    width='3'
                                    height='87'
                                    viewBox='0 0 3 87'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <line
                                        x1='1.5'
                                        x2='1.5'
                                        y2='87'
                                        stroke='#F4F4F4'
                                        strokeWidth='3'
                                        strokeDasharray='8 4'
                                    />
                                </svg>
                            </div>
                            <div className='howWeWork__content__list__item__text'>
                                <span>{t([`howWeWork.howWeWorkList.${step.key}.label`])}</span>
                            </div>
                        </li>
                    ))}
                    <li className='howWeWork__content__list__item'>
                        <div className='howWeWork__content__list__item__mark'>
                            <svg
                                width='48'
                                height='48'
                                viewBox='0 0 48 48'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <circle cx='24' cy='24' r='12' fill='#F7A73A' />
                                <circle cx='24' cy='24' r='22.5' stroke='#F7A73A' strokeWidth='3' />
                            </svg>
                        </div>
                        <div className='howWeWork__content__list__item__text'>
                            <span>{t([`howWeWork.howWeWorkList.payment.label`])}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </WrapperBlock>
    );
};
