import React from "react";
import { useTranslation } from "react-i18next";

import { WrapperBlock } from "./WrapperBlock";
import { BlockName } from "./BlockName";
import truck from "assets/icons/truck.svg";
import toolbox from "assets/icons/toolbox.svg";
import paintingRoller from "assets/icons/paintingRoller.svg";

export const Services = () => {
    const { t } = useTranslation();
    return (
        <div id='/services'>
            <WrapperBlock className='services'>
                <BlockName name='servicesBlock.label' subtext='servicesBlock.blockName' />
                <div className='services__content'>
                    <div className='services__content__block'>
                        <div>
                            <img src={truck} alt='truck-icon' />
                            <span>Доставка</span>
                        </div>
                        <span className='servicesInfo'>{t("servicesBlock.delivery")}</span>
                    </div>
                    <div className='services__content__block'>
                        <div>
                            <img src={toolbox} alt='toolbox-cion' />
                            <span>Установка</span>
                        </div>
                        <span className='servicesInfo'>{t("servicesBlock.installation")}</span>
                    </div>
                    <div className='services__content__block'>
                        <div>
                            <img src={paintingRoller} alt='paintingRoller-icon' />
                            <span>Покраска</span>
                        </div>
                        <span className='servicesInfo'>{t("servicesBlock.painting")}</span>
                    </div>
                </div>
            </WrapperBlock>
        </div>
    );
};
