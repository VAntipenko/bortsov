import React from "react";
import { useTranslation } from "react-i18next";

import { SocialContactsInBlock } from "./SocialContactsInBlock";

export const WholesaleOffers = () => {
    const { t } = useTranslation();

    return (
        <div className='wholesaleOffers' id='/wholesaleOffers'>
            <div className='wholesaleOffers__top'>
                <div>
                    <svg
                        width='48'
                        height='48'
                        viewBox='0 0 48 48'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M27.18 14.82L34.34 22H6V26H34.34L27.16 33.18L30 36L42 24L30 12L27.18 14.82Z'
                            fill='#F7A73A'
                        />
                    </svg>
                    <h4>{t("wholesaleOffers.label")}</h4>
                </div>
                <span>{t("wholesaleOffers.subtext")}</span>
            </div>
            <div className='table'>
                <div className='table__block'>
                    <div className='table__block--head'>
                        <span>{t("wholesaleOffers.table.head")} 100 м²</span>
                    </div>
                    <div className='table__block--body'>
                        <span>{t("wholesaleOffers.table.body")} 5 грн за м²</span>
                    </div>
                </div>
                <div className='table__block'>
                    <div className='table__block--head'>
                        <span>{t("wholesaleOffers.table.head")} 200 м²</span>
                    </div>
                    <div className='table__block--body'>
                        <span>{t("wholesaleOffers.table.body")} 6 грн за м²</span>
                    </div>
                </div>
                <div className='table__block'>
                    <div className='table__block--head'>
                        <span>{t("wholesaleOffers.table.head")} 300 м²</span>
                    </div>
                    <div className='table__block--body'>
                        <span>{t("wholesaleOffers.table.body")} 7 грн за м²</span>
                    </div>
                </div>
            </div>
            <SocialContactsInBlock question='catalog.moreInformation' subtext='catalog.subtext' />
        </div>
    );
};
