import React from "react";
import { useTranslation } from "react-i18next";

import { LinkToMessenger } from "./LinkToMessenger";

export const SocialContactsInBlock = ({ question, subtext }) => {
    const { t } = useTranslation();

    return (
        <div className='socialContactsInBlock'>
            <div className='socialContactsInBlock__text'>
                <h4>{t(question)}</h4>
                <span>{t(subtext)}</span>
            </div>
            <div className='socialContactsInBlock__contacts'>
                <div className='socialContactsInBlock__contacts__links'>
                    <LinkToMessenger url='viber://chat?number=%2B0660776326'>Viber</LinkToMessenger>
                    <LinkToMessenger url='https://t.me/barskij_dvor'>Telegram</LinkToMessenger>
                </div>
                <div className='socialContactsInBlock__contacts__phones'>
                    <span>061 270 60 90</span>
                    <span>‎096 484 49 49</span>
                    <span>066 077 63 26</span>
                </div>
            </div>
        </div>
    );
};
