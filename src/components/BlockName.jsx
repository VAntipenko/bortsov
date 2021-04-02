import React from "react";
import { useTranslation } from "react-i18next";

export const BlockName = ({ id, name, subtext }) => {
    const { t } = useTranslation();
    return (
        <div className='blockName'>
            <span id={id}>{t(subtext)}</span>
            <h2>{t(name)}</h2>
            <div className='blockName__underblock' />
        </div>
    );
};
