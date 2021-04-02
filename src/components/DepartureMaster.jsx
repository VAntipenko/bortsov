import React from "react";
import { useTranslation } from "react-i18next";

import { WrapperBlock } from "./WrapperBlock";
import { SocialContactsInBlock } from "./SocialContactsInBlock";

export const DepartureMaster = () => {
    const { t } = useTranslation();
    const listServicesKey = [
        { key: "accurateMeasurement" },
        { key: "listMaterials" },
        { key: "recommendation" },
        { key: "installationFeatures" },
    ];

    return (
        <WrapperBlock className='departureMaster'>
            <h2>{t("departureMaster.blockName")}</h2>
            <span>{t("departureMaster.listLabel")}</span>
            <ul>
                {listServicesKey.map((service, index) => (
                    <li key={index}>
                        <svg
                            width='32'
                            height='32'
                            viewBox='0 0 32 32'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M11.9995 20.8929L6.75306 15.6465L6.3995 15.2929L6.04595 15.6465L4.17928 17.5131L3.82573 17.8667L4.17928 18.2202L11.646 25.6869L11.9995 26.0404L12.3531 25.6869L28.3531 9.68689L28.7066 9.33334L28.3531 8.97979L26.4864 7.11312L26.1328 6.75957L25.7793 7.11312L11.9995 20.8929Z'
                                fill='#F7A73A'
                                stroke='#F7A73A'
                            />
                        </svg>

                        {t([`departureMaster.listServices.${service.key}`])}
                    </li>
                ))}
            </ul>
            <SocialContactsInBlock
                question='departureMaster.masterCall'
                subtext='departureMaster.subtext'
            />
        </WrapperBlock>
    );
};
