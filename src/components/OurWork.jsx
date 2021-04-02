import React from "react";
import { useTranslation } from "react-i18next";

import { WrapperBlock } from "./WrapperBlock";
import { Slider } from "./Slider";

export const OurWork = () => {
    const { t } = useTranslation();
    return (
        <WrapperBlock className='ourWork'>
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
                <h4>{t("ourWork.blockName")}</h4>
            </div>
            <div className='ourWork__content'>
                <Slider />
            </div>
        </WrapperBlock>
    );
};
