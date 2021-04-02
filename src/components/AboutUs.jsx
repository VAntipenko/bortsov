import React from "react";
import { useTranslation } from "react-i18next";

import { BlockName } from "./BlockName";
import { WrapperBlock } from "./WrapperBlock";
import trophy from "assets/icons/trophy.svg";
import stamp from "assets/icons/stamp.svg";
import medal from "assets/icons/medal.svg";

export const AboutUs = () => {
    const { t } = useTranslation();
    return (
        <div id='/aboutCompany'>
            <WrapperBlock className='aboutUs'>
                <BlockName name='aboutUs.label' subtext='aboutUs.blockName' />
                <div className='aboutUs__content'>
                    <div className='aboutUs__content__block'>
                        <div>
                            <img src={trophy} alt='trophy-icon' />
                        </div>
                        <span>{t("aboutUs.trophy.label")}</span>
                        <span>{t("aboutUs.trophy.subtext")}</span>
                    </div>
                    <div className='aboutUs__content__block'>
                        <div>
                            <img src={stamp} alt='stamp-icon' />
                        </div>
                        <span>{t("aboutUs.stamp.label")}</span>
                        <span>{t("aboutUs.stamp.subtext")}</span>
                    </div>
                    <div className='aboutUs__content__block'>
                        <div>
                            <img src={medal} alt='medal-icon' />
                        </div>
                        <span>{t("aboutUs.medal.label")}</span>
                        <span>{t("aboutUs.medal.subtext")}</span>
                    </div>
                </div>
            </WrapperBlock>
        </div>
    );
};
